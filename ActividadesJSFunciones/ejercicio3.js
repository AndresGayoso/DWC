//Declarar variable
var numero;

//Funcion que muestra los numeros primos
function Mostrar(){

    //Escribimos un titulo
    document.write("<h1>Estos son los 1000 primeros primos</h1>")

    //Bucle que nos mostrara los numeros primos del 1 al 1000
    for(let i = 2;i<=1000;i++){

        //Numero es igual a i porque asi no tenemos que tener un contador ya que el bucle va sumando solo
        numero = i;

        //Muestra los numeros que son primos(Solo tiene dos divisores 1 y el mismo)
        if(Divisores() == 2){
            document.write("-",numero,"<br>");
        }

    }

}

//Funcion que nos dice cuantos divisores tiene
function Divisores(){

    //Declara variable 
    var divisores = 0;

    //Bucle que nos dice cuantos divisores tiene
    for(let i = 1; i <= numero;i++){
        //Si el numero es divisible en entre el numero i, suma 1 a divisores
        if(numero % i == 0){
            divisores++;
        }
    }

    //Devuelve la cantidad de divisores que tiene el numero
    return divisores;

}

window.onload = Mostrar();