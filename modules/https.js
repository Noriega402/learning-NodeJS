const http = require('http');

http.createServer(function(request, response){
    console.log("Nueva Peticion");
    console.log(request.url);
    response.end();
}).listen(3000);

console.log("Escuchando el el puerto 3,000");