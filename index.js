const {app, BrowserWindow} = require('electron')

app.disableHardwareAcceleration()

let mainWindow = null

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
    })
    mainWindow.loadFile('index.html')
    mainWindow.on('closed', () => {
        mainWindow = null
    })
    mainWindow.webContents.openDevTools()
}

app.on('ready', createMainWindow)

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') {
        app.quit()
    }
})