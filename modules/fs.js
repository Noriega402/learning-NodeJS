const fs = require('fs');

function read(route, callback){
    fs.readFile(route, (err, data) => {
        callback(data.toString());
    });
}

read(__dirname + '/test.txt', console.log); //se pasa el console.log como funcion para imprimir el texto del archivo