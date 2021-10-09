//Añade un numero del 1 al 100 aleatorio
var randomNumber = Math.floor(Math.random() * 100) + 1;
//Nº de intentos
var intentos = 0;
//Finalizar el bucle
var acabar = false;
//Numero que introduce el usuario
var numero;
//confirmacion(volver a jugar)
var confirmar;

while(!acabar){
    
    //pedir numero
    numero = prompt("Adivina el numero del 1 al 100");
    
    //Variable por si el usuario le da a cancelar que no siga el bucle
    if(numero != null){

    //numero correcto
    if(numero == randomNumber){
        intentos++;
        alert("Enhorabueno has acertado en: " + intentos);

        //Volver a jugar
        confirmar = confirm("¿Quieres volver a jugar?")
        if(confirmar){
            //Encontrar un numero nuevo para volver a jugar
            randomNumber = Math.floor(Math.random() * 100) + 1;
            continue;
        }else{
            break;
        }
    }

    //El numero es menor
    if(numero < randomNumber){
        alert("El numero es mas alto");
        intentos++;
    }

    //El numero es mayor
    if(numero > randomNumber){
        alert("El numero es mas bajo.");
        intentos++;
    }

    //No es un numero
    if(isNaN(numero)){
        alert("Eso no es un numero."); 
    }
    
    //Lo que se muestra si el usuario le da a cancelar
    }else{
        alert("Se ha cancelado el juego");
        acabar = true;
    }

}
