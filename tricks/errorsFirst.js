function asincrona(callback){
    console.log("una linea de codido");
    setTimeout(function(){
        try {
            let x = 4 + 6;
            callback(null, x);
        } catch (error) {
            callback(error);
        }
    }, 1000);
}

asincrona(function(err, data){
    if(err){
        console.error('Al parecer hay un error');
        console.error(err);
        return false;
    }

    console.log('Preba superada: ' + data);
})