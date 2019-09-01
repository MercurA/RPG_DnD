const { app, BrowserWindow, Menu } = require('electron');

isStartGameOpen = false;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
  app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let startGameWindow;

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    resizable: false
  });

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
};

const createStartGame = (isStartGameOpen) => {
  startGameWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    resizable: false
  });

  startGameWindow.loadURL(`file://${__dirname}/startGame/startGame.html`);
  const startMenu = Menu.buildFromTemplate(startGameMenuTemplate);
  Menu.setApplicationMenu(startMenu);

  // const newChar = document.getElementById('newCharacter');

    // newChar.addEventListener('click', () => {
    //   console.log('123');
    // })



  startGameWindow.on('close', () => {
    startGameWindow = null;
  });

  if(isStartGameOpen) {
    isStartGameOpen = false;
    mainWindow.close();
  }

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});


const startGameMenuTemplate = [
  {
    label: ''
  }
];

const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Start New Game',
        click() {
          isStartGameOpen = true;
          createStartGame(isStartGameOpen);
        }
      },
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
          app.quit();
        }
      }
    ]
  }
];

if(process.env.NODE_ENV !== 'production') {

  startGameMenuTemplate.push({
    label: 'Developer Tools',
    submenu: [
      {
        label: 'Toggle dev tools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        },
      },
      {
        role: 'reload'
      }
    ]
  });

  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu: [
      {
        label: 'Toggle dev tools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow){
          focusedWindow.toggleDevTools();
        },
      },
      {
        role: 'reload'
      }
    ]
  });
}