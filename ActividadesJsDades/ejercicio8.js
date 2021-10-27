function MediaNumeros(){

    var numeros = 0;
    
    var numero;

    var acabar = false;

    var contador = 0;

    while(!acabar){
        
        numero = prompt("Escribe un numero(Si quieres acabar escribe 0)");

        if(numero == null){
            document.write("El programa se ha acabado y no se mostrara la media");
            acabar = true;
            break;
        }

        if(numero == 0){
            document.write("La media es: ",numeros / contador);
            acabar = true;
            break;
        }

        if(!isNaN(numero)){
            numeros += parseInt(numero);
            contador++;
        }

    }

}
window.onload = MediaNumeros();