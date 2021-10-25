function Cifrar(){
    //Variable que contiene el texto que escribimos
    var texto = document.getElementById("texto").value;
    //Variable que contiene el numero que escribimos
    var clave = document.getElementById("clave").value;

    //Declaramos las variables
    var cifrado = "";
    var cifrar;

    //Bucle que nos cifra el texto que hemos escrito
    for(let i = 0; i < texto.length;i++){

        //Nos va dando nuestro texto pero en codigo unicode
         cifrar = texto.charCodeAt(i);
        //Va almacenando el texto cifrado(Cogemos el texto en unicode y le sumamos la clave)
        cifrado += ("&#"+(cifrar + parseInt(clave))+";");

    }
    //mostramos el texto
    document.write(cifrado);
}