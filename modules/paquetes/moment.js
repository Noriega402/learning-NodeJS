const moment = require('moment');

let ahora = moment();

console.log(ahora.toString()); //fecha de hoy
console.log(ahora.format('DD/MM/YYYY - HH:mm:ss'));// modificar formato de fecha