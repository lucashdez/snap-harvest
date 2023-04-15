const { app, BrowserWindow, shell} = require('electron');
app.on("ready", () => {
    const win = new BrowserWindow({
        autoHideMenuBar: true,
    });
    win.maximize();
    win.loadURL("https://www.getharvest.com/");


    win.webContents.setWindowOpenHandler(({ url }) => {
        if (!url.startsWith("https://www.getharvest.com")) {
            shell.openExternal(url);
            return { action: "deny" };
        }
        return { action: "allow" };
    });
        
});
