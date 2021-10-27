function Palindromo(){
    
    //El texto que queremos que analize
    var texto = prompt("Escribe una frase");

    //Nos convierte todas las mayusculas en minisculas
    var minusculas = texto.toLocaleLowerCase();

    //cadena con todos los acentos y dieresis (Signos de puntuacio : letra por la que se debe sustituir)
    var acentos = {'ä':'a','ë':'e','í':'i','ö':'o','ü':'u','á':'a','é':'e','í':'i','ó':'o','ú':'u'};

    //Nos quita los acentos y dieresis
    var QuitarSignosP = minusculas.split('').map( letra => acentos[letra] || letra).join('').toString();

    console.log(QuitarSignosP);

    //Nos crea un array con un caracter en cada posicion
    var cadenaConEspacios = QuitarSignosP.split("");

    //Decalara variable
    var cadenaSinEspacios = "";

    //Bucle que quita los espacios a la cadena
     for(i in cadenaConEspacios) {
         //si no tiene espacio se guarda en la variable y al final saldra el texto sin espacios
        if(cadenaConEspacios[i] != " ") {
            cadenaSinEspacios += cadenaConEspacios[i];
        }
    }

    //Conertimos el texto sin espacios en cadena(sirve para comparar caracteres uno a uno despues)
    var cadena = cadenaSinEspacios.split("");

    //Convertimos el texto sin espacios y le damos la vuelta
    var cadenaAlReves = cadenaSinEspacios.split("").reverse();

    //Boolean para saber si es palindromo
    var palindromo = false;

    //bucle que comprueba si es palindromo
    for(i in cadena){
        //Si todos los caracteres son iguales significa que es palindromo
        if(cadena[i] == cadenaAlReves[i]){
            palindromo = true;
        }else{
            //si los caracteres no son iguales no es palindromo y se acaba
            document.write(texto,"<br>")
            document.write("No es un palindromo");
            break;
        }
    }

    //Si es palindromo mostramos este resultado
    if(palindromo == true){
        document.write(texto,"<br>")
        document.write("Es un palindromo");
    }



}
window.onload = Palindromo();