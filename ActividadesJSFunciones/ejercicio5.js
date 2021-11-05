function ComprobarRepetidos(){

    var acabar = false;
    var palabras = [];
    var contador = 0;
    var repetido = 0;

    while(!acabar){

        palabras[contador] = new Array(2); 
        palabras[contador][0] = prompt("Escribe una palabra: ");
        palabras[contador][1] = parseInt(repetido);
        console.log(palabras[contador][1]);
        if(palabras[contador][0] == null){
            acabar = true;
        }
        if(palabras[contador][0].trim() == ""){
            acabar = true;
            palabras.splice(contador,1)
        }
        contador++;
    }
    
    var repetidas = palabras.map(palabras)


    document.write(repetidas);

}
window.onload = ComprobarRepetidos();