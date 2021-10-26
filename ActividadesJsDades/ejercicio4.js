function Frecuencias(){

    //Declarar varibles
    var numero;

    var uno = 0,dos = 0,tres = 0,cuatro = 0,cinco = 0,seis = 0,siete = 0,ocho = 0,nueve = 0,diez = 0;

    for(let i = 0; i < 10000;i++){

        //Variable que nos saca un numero del 1 al 10
        numero = Math.floor(Math.random() * (11-1) + 1);

        //Condiciones que nos sumando la variable segun el numero que salga
        if (numero == 1){
            uno++;
        }
        if (numero == 2){
            dos++;
        }
        if (numero == 3){
            tres++;
        }
        if (numero == 4){
            cuatro++;
        }
        if (numero == 5){
            cinco++;
        }
        if (numero == 6){
            seis++;
        }
        if (numero == 7){
            siete++;
        }
        if (numero == 8){
            ocho++;
        }
        if (numero == 9){
            nueve++;
        }
        if (numero == 10){
            diez++;
        }
    }
    
    //Mostramos el texto
    document.write("<h1><b>Frecuencias</b></h1>")
    document.write("<ul>")
    document.write("<li>Numero 1: " + uno + "</li>")
    document.write("<li>Numero 2: " + dos + "</li>")
    document.write("<li>Numero 3: " + tres + "</li>")
    document.write("<li>Numero 4: " + cuatro + "</li>")
    document.write("<li>Numero 5: " + cinco + "</li>")
    document.write("<li>Numero 6: " + seis + "</li>")
    document.write("<li>Numero 7: " + siete + "</li>")
    document.write("<li>Numero 8: " + ocho + "</li>")
    document.write("<li>Numero 9: " + nueve + "</li>")
    document.write("<li>Numero 10: " + diez + "</li>")
    document.write("</ul>")
}
window.onload = Frecuencias();