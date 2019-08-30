/**
 * Main entry point for electron application
 *
 * author: William Tong (williamtong105@gmail.com)
 * date: 8/27/2019
 */

const path = require('path');
const url = require('url');

const electron = require('electron');
const isDev = require('electron-is-dev');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;
let mainWindow;

app.on('ready', createWindow);
app.on('window-all-closed', app.quit);
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

function createWindow() {
    Menu.setApplicationMenu(null); // workaround to hide application menu
    mainWindow = new BrowserWindow({width: 490, height: 350});

    const startURL = _getStartURL();
    mainWindow.loadURL(startURL);
    mainWindow.on('closed', () => mainWindow = null);
}

function _getStartURL() {
    let startURL = 'http://localhost:3000';
    if (!isDev) {
        startURL = url.format({
            pathname: path.join(__dirname, '../build/index.html'),
            protocol: 'file:',
            slashes: true
        });
    }

    return startURL;
}
