const http = require('http');
const host = "127.0.0.1";
const port = 3000;

const server = http.createServer(function(request, response){
    console.log(request.url);
    response.writeHead(200,{'Content-Type':'text/plain'});// agregando cabeceras a la pagina
    response.write("Mi primer servidor montado con Node JS!"); //mensaje en la pagina principal
    response.end();
});

server.listen(port, host, () => console.log(`Escuchando en: ${host}:${port}`))