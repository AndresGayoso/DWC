var randomNumber = Math.floor(Math.random() * 100) + 1;
var intentos = 0;
var acabar = false;
var numero;

while(!acabar){
    
    numero = prompt("Adivina el numero",randomNumber);
    
    if(numero == randomNumber){
        alert("Enhorabueno has acertado en: " + intentos);
        acabar = true;
        intentos++;
    }

    if(numero < randomNumber){
        alert("El numero es mas alto");
        intentos++;
    }

    if(numero > randomNumber){
        alert("El numero es mas bajo.");
        intentos++;
    }

    if(isNaN(numero)){
<<<<<<< HEAD
        alert("Eso no es un numero."); 
    }

}
=======
        alert("Eso no es un numero.");
    }

}
>>>>>>> fbef8018b7d4be226688962dff339a8e72c76bc1
