const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('hotspotAPI', {
  selectHotspot(hotspot) {
    ipcRenderer.send('hotspot-selected', hotspot);
  },
  onHotspotDisplay(callback) {
    ipcRenderer.on('show-hotspot', (_, data) => callback(data));
  }
});
