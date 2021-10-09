var randomNumber = Math.floor(Math.random() * 100) + 1;
var intentos = 0;


for(let i = 0; acabar == true;i++){
    var numero = prompt("Adivina el numero",randomNumber);
    
    if(numero == randomNumber){
        alert("Enhorabueno has acertado en: ",intentos);
        acabar = true;
        break;
    }

    if(numero < randomNumber){
        alert("El numero es mas bajo");
        intentos++;
    }

    if(numero < randomNumber){
        alert("El numero es mas bajo.");
        intentos++;
    }

    if(!isNaN(numero)){
        alert("Eso no es un numero.");
    }

}