function OrdenarAlReves(){

    //Declaramos las variables
    //Boolean para parar el bucle
    var acabar = false;
    //Array para guardar las palabras del usuario
    var palabras = [];
    //Int para ir guardando en esa posicion del array
    var contador = 0;

    //Buclea para ir almacenando las palabras que escribe el usuario
    while(!acabar){

        //Metemos en el array la palabra que nos ha introducido el usuario
        palabras[contador] = prompt("Escribe una palabra: ");

        //Si el usuario cancela se acaba el bucle
        if(palabras[contador] == null){
            acabar = true;
        }

        //Si el usuario deja la casilla en blanco se acaba el bucle
        if(palabras[contador].trim() == ""){
            acabar = true;
        }

        //Vamos sumando uno a la variable contador en cada pasada
        contador++;
    }

    //Sort nos ayuda a ordenar los elementos de un array
    //Dentro del sort ponemos la funcion localeCompare
    //localeCompare lo que hace es decirnos si la palabra es anterior o posterior a la palabra que le pasamos
    palabras.sort((a,b) => b.toLowerCase().localeCompare(a.toLowerCase()));

    //Mostramos el array
	document.write(palabras);
}
window.onload = OrdenarAlReves();