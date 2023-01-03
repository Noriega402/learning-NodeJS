require('dotenv').config();

async function principal(name){
	let nombre = await saludar(name)
	await talk()
	await talk()
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

async function talk(name) {
	return new Promise((res,rej) => {
		setTimeout(function() {
			console.log("estoy diciendo algo...");
			res(name)
		}, 2000);
	});
}

async function adios(name) {
	return new Promise((res,rej) => {
		setTimeout(function() {
			console.log(`Adios ${name}`);
			res(name)
		}, 1500);
	})
}

principal(process.env.NAME)