const { app, BrowserWindow, ipcMain, Tray, Menu } = require('electron');
const fs = require('fs');
const path = require('path');
const AutoLaunch = require('electron-auto-launch');

let tray = null;
let noteWindows = [];

const NOTE_PATH = path.join(app.getPath('userData'), 'note.json');

const autoLauncher = new AutoLaunch({
  name: 'My Sticky Notes', // You can match your actual app name here
  path: process.execPath,
});

// 🔁 Sync tray checkbox with system setting
async function syncAutoLaunchCheckbox(menuItem) {
  const isEnabled = await autoLauncher.isEnabled();
  menuItem.checked = isEnabled;
}

// 📒 Create new note window
function createNoteWindow(x = 100, y = 100) {
  const win = new BrowserWindow({
    width: 300,
    height: 300,
    x, y,
    webPreferences: {
      preload: path.join(__dirname, '../renderer/main_window/preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
    frame: false,
  });

  win.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  noteWindows.push(win);

  win.on('closed', () => {
    noteWindows = noteWindows.filter(w => w !== win);
  });

  return win;
}

app.whenReady().then(async () => {
  createNoteWindow();

  tray = new Tray(path.resolve(__dirname, '../assets/tray.png')); // Use path.resolve

  const contextMenu = Menu.buildFromTemplate([
    { label: 'New Note', click: () => createNoteWindow() },
    {
      label: 'Start on Boot',
      type: 'checkbox',
      click: async (menuItem) => {
        const enabled = await autoLauncher.isEnabled();
        if (menuItem.checked && !enabled) {
          autoLauncher.enable();
        } else if (!menuItem.checked && enabled) {
          autoLauncher.disable();
        }
      },
    },
    { label: 'Quit', click: () => app.quit() },
  ]);

  // Sync the checkbox state with current setting
  await syncAutoLaunchCheckbox(contextMenu.items.find(i => i.label === 'Start on Boot'));

  tray.setToolTip('Sticky Notes');
  tray.setContextMenu(contextMenu);
});

// IPC handlers
ipcMain.handle('load-note', async () => {
  try {
    if (fs.existsSync(NOTE_PATH)) {
      const data = fs.readFileSync(NOTE_PATH, 'utf8');
      return JSON.parse(data);
    }
    return { text: '' };
  } catch (err) {
    console.error('Error loading note:', err);
    return { text: '' };
  }
});

ipcMain.handle('save-note', async (event, { text }) => {
  try {
    fs.writeFileSync(NOTE_PATH, JSON.stringify({ text }), 'utf8');
  } catch (err) {
    console.error('Error saving note:', err);
  }
});

ipcMain.handle('create-new-note', () => {
  createNoteWindow();
});

ipcMain.on('new-note', () => {
  createNoteWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createNoteWindow();
});
