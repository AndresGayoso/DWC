function Cifrar(){
    //Variable que contiene el texto que escribimos
    var texto = document.getElementById("texto").value;
    //Variable que contiene el numero que escribimos
    var clave = document.getElementById("clave").value;

    //Declaramos las variables
    var cifrado = "";   
    var cifrar;
    var x = 0;

    //Bucle que nos cifra el texto que hemos escrito
    for(let i = 0; i < texto.length;i++){

            //Nos va dando las claves que tenemos que sumar al texto
            numero = clave.charAt(x);
            //Nos va dando nuestro texto pero en codigo unicode
            cifrar = texto.charCodeAt(i);
            //Va almacenando el texto cifrado(Cogemos el texto en unicode y le sumamos la clave)
            cifrado += ('&#'+(cifrar + parseInt(numero))+';');
        x++;
        //Condicion por si la clave es mas corta que el texto, que se vuelva al inicio de la clave
        if (x >= clave.length){
            x = 0;
        }
    }

    //Mostramos el texto
    document.write(cifrado);
    document.write("<br>")
    document.write('Bsxixu"ìw%fn#qntudxlf');
}