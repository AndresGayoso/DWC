//Mostrar el tipo de triangulo 1
function MostrarT1(){
    //Numero que introduce el usuario
    var numero = parseInt(document.getElementById("numero").value);
    //Contador de estrellas
    var contador = numero;

    //Bucle incial que mostrara las filas
    for(let i = 1; i <= numero; i++){
        //Bucle que nos muestra las estrellas
        for(let j = 0; j < contador; j++){
            document.write("*");
        }
        document.write("<br>");
        contador--;
    }

}

//Mostrar el tipo de triangulo 2
function MostrarT2(){
    //Numero que introduce el usuario
    var numero = parseInt(document.getElementById("numero").value);
    //Contador de estrellas
    var contador = numero;
    
    //Bucle incial que mostrara las filas
    for(let i = 1; i <= numero; i++){
        //Bucle que nos muestra las estrellas
        for(let j = 0; j < contador; j++){
            document.write("&nbsp;");
        }
        for(let j = 0; j < i; j++){
            document.write("*");
        }
        document.write("<br>");
        contador--;
    }

}

//Mostrar el tipo de triangulo 3
function MostrarT3(){
    //Numero que introduce el usuario
    var numero = parseInt(document.getElementById("numero").value);
    //Contador de estrellas
    var contador = numero;
    
    //Bucle incial que mostrara las filas
    for(let i = 1; i <= numero; i++){
        //Bucle que nos muestra las estrellas
        for(let j = 0; j < i; j++){
            document.write("&nbsp;");
        }
        for(let j = 0; j < contador; j++){
            document.write("*");
        }
        document.write("<br>");
        contador--;
    }

}