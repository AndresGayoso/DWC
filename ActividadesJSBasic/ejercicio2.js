//Funciona para crear el juego
function JuegoInfantil(){
    //Numeros aleatorios entre 0 y 2 para decidir que saca cada jugador
    var jugador1 = Math.floor(Math.random() * (3 - 0) + 0);
    var jugador2 = Math.floor(Math.random() * (3 - 0) + 0);

    //Informacion por pantalla
    document.write("<h1>Pedra, paper, tisora !</h1>")

    //Array con los simbolos de cada jugador
    arraySimbolosJ1 = ["&#129308;","&#129306;","&#128406;"]
    arraySimbolosJ2 = ["&#129307;","&#129306;","&#128406;"]

    //Mostrar el simbolo correspondiente por pantalla
    document.write(`<div>${arraySimbolosJ1[jugador1]}</div>`)
    document.write(`<div>${arraySimbolosJ2[jugador2]}</div>`)

    //Condicion para saber si han empatado
    if (jugador1 != jugador2){
        //Condicion para saber si ha ganado el jugador 1 sino ha ganado el 2
       if(jugador1 == 0 && jugador2 == 2 || jugador1 == 2 && jugador2 == 1  || jugador1 == 1 && jugador2 == 0 ){
           //Muesta que ha ganado el jugador 1
           document.write("<h2>Ha guanyat el jugador 1 !</h2>")
       }else{
        //Muestra que ha ganado el jugador 2
        document.write("<h2>Ha guanyat el jugador 2 !</h2>")
       }
    }else{
        //Muestra que han empatado
        document.write("<h2>Empate!</h2>")
    }

}
//Se carga la funcion cada vez que se inicia la pagina
window.onload = JuegoInfantil();