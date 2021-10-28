function MediaNumeros(){

    //Variable para sumar los numero
    var numeros = 0;
    
    //Donde se introduce el numero
    var numero;

    //Finalizar el programa
    var acabar = false;

    //Variable contador
    var contador = 0;

    //Bucle que hara la media de los numeros
    while(!acabar){
        
        //Introducir el numero
        numero = prompt("Escribe un numero(Si quieres acabar escribe 0)");

        //Si cancela se acaba el programa
        if(numero == null){
            document.write("El programa se ha acabado y no se mostrara la media");
            acabar = true;
        }

        //Si escribe 0 se acaba el programa y hace la media
        if(numero == 0){
            document.write("La media es: ",numeros / contador);
            acabar = true;
        }

        //Si es un numero los suma al total(sino no se almacena)
        if(!isNaN(numero)){
            numeros += parseInt(numero);
            contador++;
        }

    }

}
window.onload = MediaNumeros();