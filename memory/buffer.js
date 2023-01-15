let buffer1 = Buffer.alloc(4); //reservando 4 espacios de memoria (RAM)
let buffer2 = Buffer.from([1,2,5]); //guardando arreglo de numeros (RAM)
let buffer3 = Buffer.from("Hola Mundo"); //guardando cadena en buffer (RAM)

console.clear();
console.log(buffer1);
console.log(buffer2);
console.log(buffer3); //mostrando en hexagesimal
console.log(buffer3.toString()); //mostrando texto

let abecedario = Buffer.alloc(26);

for(let i = 0; i < abecedario.length; i++){
    abecedario[i] = i + 97; //97 por codigo ASCII
}

console.log(abecedario.toString());