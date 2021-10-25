function Asteriscos(){

    //Declarar variable
    var numeros = [];

    //Rellenar el array con numeros del 1 al 50 (20 veces)
    for (let i = 0; i < 20;i++){
        numeros[i] = Math.floor(Math.random()* (51 - 1) + 1);
    }

    //bucle que recorre el array
    for(let x = 0; x < numeros.length;x++){

        //Bucle que muestra un numero de estrellas segun el numero del array
        for(let j = 0; j < numeros[x];j++){
            document.write("*");
        }
        document.write("<br>");
    }

}
window.onload = Asteriscos();