require('dotenv').config();

function saludar(name) {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log(`Hola ${name}`);
			resolve(name)
		}, 1000);
	});
}

function adios(name) {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log('Adios ' + name);
			// resolve(name);
			reject('Ups, parece que hubo un error')
		}, 1000);
	})
}

function talk(name) {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			console.log("bla bla bla bla");
			resolve(name)
		}, 1000);
	});
}

console.log("Primera instruccion")
saludar(process.env.NAME)
	.then(talk)
	.then(adios) // para poder acceder al nombre siempre se tiene que pasar como parametro hasta donde se necesite
	.then(res => console.log("Ultima instruccion"))
	.catch(error =>{
		console.error('Error al ejecutar las promesas');
		console.error(error);
	})