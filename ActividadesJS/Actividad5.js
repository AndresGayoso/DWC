function Mostrar(){
    //numero que introduce el usuario
    var numero = parseInt(document.getElementById("numero").value);

    //Bucle incial que mostrara las filas
    for(var i = 1; i <= numero; i++){
        //Bucle que nos muestra las estrellas
        for(var j = 1; j <= i; j++){
            document.write("*");
        }
        document.write("<br>");
    }

}