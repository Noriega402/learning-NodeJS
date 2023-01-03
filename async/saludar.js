require('dotenv').config();

function saludar(name, callback, url, terminar) {
	console.log("En un momento te saludare...")
	console.log("Tambien te dare tu URL de GitHub!");
	setTimeout(function() {
		callback(name)
		url();
		terminar()
	}, 2000);
}

function getName(name) {
	console.log(`Hola ${name}`)
}

function stop(){
	console.log("Terminando el proceso de saludo")
}

function miWeb(){
	console.log(`Tu pagina de github es: ${process.env.GITHUB_URL}`);
}

console.log("Iniciando proceso de saludar")
saludar(process.env.NAME,getName, miWeb,stop);