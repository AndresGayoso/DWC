function Palindromo(){
    
    var texto = prompt("Escribe una frase");

    var minusculas = texto.toLocaleLowerCase();

    var cadenaConEspacios = minusculas.split("");

    var cadenaSinEspacios = "";

     for(i in cadenaConEspacios) {
        if(cadenaConEspacios[i] != " ") {
            cadenaSinEspacios += cadenaConEspacios[i];
        }
    }

    var cadena = cadenaSinEspacios.split("");

    var cadenaAlReves = cadenaSinEspacios.split("").reverse();

    var palindromo = false;

    for(i in cadena){
        if(cadena[i] == cadenaAlReves[i]){
            palindromo = true;
        }else{
            document.write("No es un palindromo");
            break;
        }
    }

    if(palindromo == true){
        document.write(texto,"<br>")
        document.write("Es un palindromo");
    }



}
window.onload = Palindromo();