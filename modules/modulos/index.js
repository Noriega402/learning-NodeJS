// importar modulos en forma nativa de Node JS
const modulo = require ('./modulo.js');
// console.log(modulo);
modulo.saludar();
modulo.add(6,4);
console.log(`El nombre a importar es: ${modulo.nombre}`);