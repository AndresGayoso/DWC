function ComprobarRepetidos(){
    
    //Declaramos variables
    //Boolean para parar el bucle
    var acabar = false;
    //Mapa
    var mapa = new Map();
    //String sera la palabra que acaba de escribir el usario
    var palabra;
    //array con las palabras que ha escrito el usario
    var palabras = [];
    //Int para ir guardando en esa posicion del array
    var contador = 0;


    //Bucle para ir preguntando al usuario una palabra hasta que lo pare
    while(!acabar){

        //Le pedimos al usuario una palabra y la guardamos
        palabra = prompt("Escribe una palabra: ");
        
        //Condicional si la palabra esta dentro del mapa entra
        if(mapa.has(palabra)){
            //Suma 1 dentro del mapa a la palabra que ha pasado el condicional
            mapa.set(palabra,(mapa.get(palabra) + 1));
        //Si no se cumple el condicional anterior hace esto
        }else{
            //Si no se cancela o no esta en blanco entra
            if(palabra != null && palabra.replace(/ /g, "") != ""){
                //Creamos la clave y el valor en el mapa
                mapa.set(palabra,1);
                //Guardamos la palabra en el array
                palabras[contador] = palabra;
            }
            contador++;
        }
        //Si el usuario cancela se acaba el programa
        if(palabra == null){
            acabar = true;
        }
        //Si el usuario deja la casilla en blanco se acaba el programa
        if(palabra.replace(/ /g, "") == ""){
            acabar = true;
        }

    }

    //Bucle para en enseñar la palabras
    for(i in palabras){
        //Mostramos la palabra y el valor dentro del mapa(las veces que aperece)
        document.write("La palabra " + palabras[i] + " aparece: " + mapa.get(palabras[i]) + " veces. <br>");
    }

}
window.onload = ComprobarRepetidos();