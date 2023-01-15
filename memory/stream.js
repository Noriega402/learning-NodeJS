let fs = require('fs');
let data = '';

let readyStream = fs.createReadStream(__dirname + '/mensaje.txt');

console.clear(),
readyStream.setEncoding('UTF8'); //Para evitar colocar un toString
readyStream.on('data', function(chunk){
    console.log(chunk);
});