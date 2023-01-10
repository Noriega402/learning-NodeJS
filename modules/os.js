const os = require('os');

console.log(os.arch()); //arquitectura de pc
console.log(os.platform()); //plataforma de pc
console.log(os.cpus().length); // numero de cpu´s
console.log(os.totalmem()); // total de memoria ram
console.log(os.freemem()); // memoria libre en ram
console.log(os.homedir()); //directorio raiz de usuario
console.log(os.hostname()); //Nombre de la pc
// console.log(os.networkInterfaces()); //direcciones de red