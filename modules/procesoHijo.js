const { exec, spawn } = require('child_process');
const { memoryUsage } = require('process');

// Para ejecutar procesos (ejecuta un archivo)
exec('node async/saludar.js', (err, stdout, stderr) => {
    if(err){
        console.log(err);
        return false;
    }

    console.log(stdout);
});

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);