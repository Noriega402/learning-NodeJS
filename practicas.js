let i = 0;

setInterval(function() {
    console.log(i);
    i++;
    if(i === 5){
        console.log("Forzamos error")
        var a = 3 + z
    }
},1000);

function nombre(name){
    console.log('Hola mi nombre es ' + name);
}


nombre("Daniel");
console.log("Iniciando el contador")