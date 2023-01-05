const fs = require('fs');

function read(route, callback){
    fs.readFile(route, (err, data) => {
        callback(data.toString());
    });
}

function write(route, content, callback){
    fs.writeFile(route, content, function(err){
        err
            ? callback('Ocurrio un error al escribir en el archivo: ' + err)
            : callback('Se pudo escribir correctamente en el archivo')
    })
}

read(__dirname + '/test.txt', console.log); //se pasa el console.log como funcion para imprimir el texto del archivo

let writing = "Estoy ingresando texto en el archivo desde Node JS!"
write(__dirname + '/writeText.txt', writing,console.log)