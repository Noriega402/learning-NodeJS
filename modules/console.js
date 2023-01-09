const myTable = [
    {
        nombre: "Daniel",
        apellido: "Noriega",
        edad: 20,
    },
    {
        nombre: "Melany",
        apellido: "Salazar",
        edad: 21,
    },
    {
        nombre: "Melany",
        apellido: "Salazar",
        edad: 21,
    }
]

console.log("Mensaje normal");
console.info("Mensaje de informacion");
console.error("Mensaje de error");
console.warn("Mensaje de alerta");
console.table(myTable);


console.group("Inicio");
console.log("Hola como te va?");
console.log("Otra respuesta");
console.log("Otra respuesta 2");
console.log("Otra respuesta 3");
console.groupEnd("Fin del saludo");

console.count("veces")
console.count("veces")
console.count("veces")
console.count("veces")

