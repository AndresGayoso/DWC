function Frecuencias(){

    //Declarar varibles
    var numero;

    //Un array que equivale a 10 posiciones
    var numeros = [0,0,0,0,0,0,0,0,0,0];

    for(let i = 0; i < 10000;i++){

        //Variable que nos saca un numero del 1 al 10
        numero = Math.floor(Math.random() * (11-1) + 1);

        //Vamos sumando a la posicion del numero que salga
        numeros[numero -1]++;

        
    }
    
    //Mostramos el texto
    document.write("<h1><b>Frecuencias</b></h1>")
    document.write("<ul>")
    //Bucle para mostrar los resultados
    for(let j = 1; j <= 10;j++){
        document.write(`<li>Numero ${j}: ` + numeros[j-1] + "</li>")
    }
    document.write("</ul>")
}
window.onload = Frecuencias();