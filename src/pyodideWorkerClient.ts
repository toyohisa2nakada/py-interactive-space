// メインスレッドから pyodideWorker を操作するためのクライアント。
// 無限ループ等で実行が一定時間を超えたら worker.terminate() して新しいワーカーを立て直す。

interface PendingEntry {
  resolve: (output: string) => void;
  reject: (err: Error) => void;
  timer: ReturnType<typeof setTimeout>;
}

let worker: Worker | null = null;
let isReady = false;
let readyResolvers: Array<() => void> = [];
const pending = new Map<number, PendingEntry>();
let nextId = 1;

function spawnWorker(): void {
  isReady = false;
  worker = new Worker(new URL('./pyodideWorker.js', import.meta.url));
  worker.onmessage = (ev: MessageEvent) => {
    const data = ev.data;
    if (data.status === 'pyodide-ready') {
      isReady = true;
      readyResolvers.forEach(r => r());
      readyResolvers = [];
      return;
    }
    if (typeof data.id === 'number') {
      const entry = pending.get(data.id);
      if (!entry) return;
      pending.delete(data.id);
      clearTimeout(entry.timer);
      if (data.status === 'ok') entry.resolve(data.output);
      else entry.reject(new Error(data.message ?? 'Python実行エラー'));
    }
  };
  worker.onerror = () => {
    spawnWorker();
  };
}

/** ワーカーを起動し、Pyodide の読み込み完了を待つ */
export function initPyodideWorker(): Promise<void> {
  if (!worker) spawnWorker();
  if (isReady) return Promise.resolve();
  return new Promise(resolve => readyResolvers.push(resolve));
}

/** 無限ループ対策つきで Python コードを実行する。タイムアウト時は 'TIMEOUT' エラーで reject される */
export function runPython(code: string, timeoutMs = 5000): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!worker || !isReady) {
      reject(new Error('Pythonの準備が完了していません'));
      return;
    }
    const id = nextId++;
    const timer = setTimeout(() => {
      pending.delete(id);
      worker?.terminate();
      spawnWorker();
      reject(new Error('TIMEOUT'));
    }, timeoutMs);
    pending.set(id, { resolve, reject, timer });
    worker.postMessage({ id, code });
  });
}
