function asincrono(miCallback) {
	console.log("Primera instruccion");
	setTimeout(function() {
		console.log("Segunda instruccion");
		miCallback();
	}, 2000);
}


function stop(){
	console.log("Terminando proceso...");
}
console.log("Iniciando proceso...");
asincrono(stop);