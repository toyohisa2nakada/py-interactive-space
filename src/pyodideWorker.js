// Pyodide 実行専用の Web Worker。
// 無限ループに陥っても、メインスレッドから worker.terminate() で強制終了できるように
// Python の実行はこのワーカー（別スレッド）の中だけで行う。
importScripts('https://cdn.jsdelivr.net/pyodide/v0.27.0/full/pyodide.js');

const pyodideReadyPromise = loadPyodide({
  indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.27.0/full/',
});
pyodideReadyPromise.then(() => self.postMessage({ status: 'pyodide-ready' }));

self.onmessage = async (event) => {
  const { id, code } = event.data;
  try {
    const pyodide = await pyodideReadyPromise;
    await pyodide.runPythonAsync(`import sys, io\n_buf = io.StringIO()\nsys.stdout = _buf`);
    await pyodide.runPythonAsync(code);
    const captured = await pyodide.runPythonAsync(
      `sys.stdout = sys.__stdout__\n_buf.getvalue().strip()`
    );
    self.postMessage({ id, status: 'ok', output: captured });
  } catch (e) {
    self.postMessage({ id, status: 'error', message: e?.message ?? String(e) });
  }
};
