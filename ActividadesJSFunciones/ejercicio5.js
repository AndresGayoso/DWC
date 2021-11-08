function ComprobarRepetidos(){
    
    var acabar = false;
    const palabras = new Map();
    var palabra;
    var valor;
    
    while(!acabar){

        palabra = prompt("Escribe una palabra: ");

        palabras.set(palabra,1);

        valor = palabras.get(palabra);

        if(palabras.has(palabra) == true){
            palabras.keySet(palabra);
        }
        
        if(palabras.has(null) == true){
            acabar = true;
            palabras.delete(null);
        }
        if(palabras.has("") == true){
            acabar = true;
            palabras.delete("");
        }
    }
    

    console.log(palabras);

}
window.onload = ComprobarRepetidos();