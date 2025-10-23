const path = require('path');
const fs = require('fs');

const electronModule = require('electron');

if (typeof electronModule === 'string') {
  // When required in a plain Node context (for example by electron-reload),
  // do nothing so that the actual Electron runtime can boot separately.
  module.exports = {};
} else {
  const { app, BrowserWindow, ipcMain, screen } = electronModule;
  let mapWindow;
  let displayWindow;

  if (!app.isPackaged) {
    try {
      const watchPaths = [
        path.join(__dirname, 'map'),
        path.join(__dirname, 'Bio_content'),
        path.join(__dirname, 'preload.js'),
        path.join(__dirname, 'main.js')
      ];

      const electronBinary =
        process.platform === 'win32'
          ? path.join(__dirname, 'node_modules', '.bin', 'electron.cmd')
          : path.join(__dirname, 'node_modules', '.bin', 'electron');

      require('electron-reload')(watchPaths, {
        electron: electronBinary,
        awaitWriteFinish: true,
        forceHardReset: true,
        hardResetMethod: 'exit'
      });
    } catch (error) {
      console.warn('Live reload disabled (electron-reload unavailable).', error);
    }
  }

  async function loadWithFallback(windowRef, options) {
    const { devUrl, filePath, emptyMessage } = options;

    if (devUrl) {
      try {
        await windowRef.loadURL(devUrl);
        return;
      } catch (error) {
        console.warn(`Failed to load ${devUrl}, falling back to local file.`, error);
      }
    }

    if (filePath && fs.existsSync(filePath)) {
      await windowRef.loadFile(filePath);
      return;
    }

    if (emptyMessage) {
      await windowRef.loadURL(`data:text/html;charset=utf-8,${encodeURIComponent(emptyMessage)}`);
    }
  }

  async function createWindows() {
    const displays = screen.getAllDisplays();
    const primary = displays[0];
    const secondary = displays[1] || displays[0];

    // Map (Screen 1)
    mapWindow = new BrowserWindow({
      x: primary.bounds.x,
      y: primary.bounds.y,
      width: primary.bounds.width,
      height: primary.bounds.height,
      webPreferences: { preload: path.join(__dirname, 'preload.js') }
    });

    // Display (Screen 2)
    displayWindow = new BrowserWindow({
      x: secondary.bounds.x,
      y: secondary.bounds.y,
      width: secondary.bounds.width,
      height: secondary.bounds.height,
      frame: false,
      fullscreen: true,
      webPreferences: { preload: path.join(__dirname, 'preload.js') }
    });

    const mapDevUrl = process.env.MAP_DEV_URL;
    const displayDevUrl = process.env.DISPLAY_DEV_URL;

    const mapHtmlPath = path.join(__dirname, 'map', 'index.html');
    const displayHtmlPath = path.join(__dirname, 'Bio_content', 'index.html');

    await Promise.all([
      loadWithFallback(mapWindow, {
        devUrl: mapDevUrl,
        filePath: mapHtmlPath,
        emptyMessage:
          '<h2 style="font-family:Segoe UI, sans-serif; text-align:center; margin-top:40vh;">Map content unavailable.</h2>'
      }),
      loadWithFallback(displayWindow, {
        devUrl: displayDevUrl,
        filePath: displayHtmlPath,
        emptyMessage:
          '<h2 style="font-family:Segoe UI, sans-serif; text-align:center; margin-top:40vh;">Awaiting hotspot selection…</h2>'
      })
    ]);
  }

  app.whenReady().then(createWindows);

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  // bridge events between windows
  ipcMain.on('hotspot-selected', (_, data) => {
    if (displayWindow) {
      displayWindow.webContents.send('show-hotspot', data);
    }
  });
}
