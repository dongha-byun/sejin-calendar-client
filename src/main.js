const { app, BrowserWindow, ipcMain } = require('electron') 
const path = require('path') 
const {
    SEND_MAIN_PING
} = require('./constants');

function createWindow () { 
  const win = new BrowserWindow({ 
    width: 1200, 
    height: 600, 
    webPreferences: { 
      nodeIntegration: true,
      contextIsolation : false
    } 
  })  

  win.loadURL("http://localhost:3000");

  win.webContents.openDevTools();
} 

// 
ipcMain.on(SEND_MAIN_PING, (event, arg) => {
    console.log(event);
    console.log(arg);
});

app.whenReady().then(() => { 
  createWindow() 
}) 
app.on('window-all-closed', function () { 
  if (process.platform !== 'darwin') app.quit() 
})