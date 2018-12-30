const ipc = require('electron').ipcMain;

///IPC Methods
ipc.on('hello', () => {
    console.log('Hello Universe');
});