const bcrypt = require('bcrypt');

const password = 'testPassword$';

bcrypt.hash(password, 10, function(err, hash){
    if(err){
        console.log(err);
    }else{
        console.log(hash);
        bcrypt.compare(password, hash, function (err, response){ //verificar si un password coincide
            if(err || response === false){
                console.log("No es el password correcto...");
            }else{
                console.log("La password coincide");
                console.log(response);
            }
        })
    }
});