const http = require('http');

http.createServer(function(request, response){
    console.log("Nueva Peticion");
    console.log(request.url);

    request.end();
}).listen(3000);