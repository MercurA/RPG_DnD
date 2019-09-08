const {BrowserWindow, Menu} = require('electron');

let newAccount;

exports.createAccount = (mainWindow) => {
    newAccount = new BrowserWindow({
    height: 800,
    width: 1000,
    resizable: false,
});
newAccount.loadURL(`file://${__dirname}/newAccount.html`);

newAccount.once('close', () => {
    createAccount = null;
});
const accountMenu = Menu.buildFromTemplate(newAccountMenuTemplate);
// Close main window
mainWindow.close();

Menu.setApplicationMenu(accountMenu);
}

const newAccountMenuTemplate = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                click() {
                    newAccount.close();
                }
            }
        ]
    },
]

if(process.env.NODE_ENV !== 'production') {
    newAccountMenuTemplate.push(
        {
            label: 'Developer Tools',
            submenu: [
                {
                    label: 'Toggle dev tools',
                    accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                    click(item, focusedWindow) {
                        focusedWindow.toggleDevTools()
                    }
                }
            ]
        }
    )
}