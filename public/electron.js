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
let mainWindow;

app.on('ready', createWindow);
app.on('window-all-closed', app.quit);
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});

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
