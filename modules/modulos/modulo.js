const nombre = "Daniel";

function saludar(){
    console.log("Hola Mundo!");
}

function add(x,y){
    let res = x + y;
    console.log(`La suma es: ${res}`);
}

// exportando de forma nativa en node JS
// module.exports = saludar;
// esportando varias cosas
module.exports = {
    nombre,
    saludar,
    add,
}