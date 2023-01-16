const {app, BrowserWindow} = require('electron');
const path = require('path');

let main;

app.on('ready', createWindow);// se ejecuta cuando la ventana esta lista para usar

app.on('window-all-closed', function(){//si se cierra la pestaña => parar el proceso
    if(process.platform !== "darwin"){
        app.quit();
    }
});

function createWindow(){ //crear una ventana
    main = new BrowserWindow({ //agregando propiedades
        width: 800,
        height: 700,
        webPreferences: { //opcion para cargar archivos antes de crear la ventana
            preload: path.join(__dirname,'styles.css'),
        }
    });

    main.loadFile('index.html');//archivo a cargar
}