function forzarError(){
    return 10 + z;
}

function correcta(){
    return "Daniel";
}

console.log("Inicio del algoritmo");
try{
    console.log(correcta());
    forzarError();
    console.log("Fin del algoritmo...");
}catch(err){
    console.log("Vaya... al parecer hubo un error");
    console.log(err.message);
}