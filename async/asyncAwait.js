require('dotenv').config();

async function principal(name){
	let nombre = await saludar(name)
	await talk()
	await talk()
	await adios(nombre)
}

async function saludar(name){
	return new Promise((res, rej) => {
		setTimeout(function() {
			console.log(`${name} estas aprendiendo asincronismo con Node JS!`);
			res(name);
		}, 3000);
	})
}

async function talk() {
	return new Promise((res,rej) => {
		setTimeout(function() {
			console.log("estoy diciendo algo...");
			res()
		}, 2000);
	});
}

async function adios(name) {
	return new Promise((res,rej) => {
		setTimeout(function() {
			console.log(`Adios ${name}`);
			res(name)
			console.log('Fin del proceso');
		}, 1500);
	})
}

console.log('Inicio del proceso');
principal(process.env.NAME)