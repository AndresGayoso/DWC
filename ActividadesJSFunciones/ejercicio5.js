function ComprobarRepetidos(){
    
    var acabar = false;
    var mapa = new Map();
    var palabra;
    var valor = 0;
    var palabras = [];
    var contador = 0;


    while(!acabar){

        palabra = prompt("Escribe una palabra: ");
        
        if(mapa.has(palabra)){
            mapa.set(palabra,(mapa.get(palabra) + 1));
        }else{
            mapa.set(palabra,valor);
            if(palabra != null && palabra != ""){
                palabras[contador] = palabra;
            }
            contador++;
        }
        if(mapa.has(null) == true){
            acabar = true;
            mapa.delete(null);
        }
        if(mapa.has("") == true){
            acabar = true;
            mapa.delete("");
        }

    }

    for(i in palabras){
        document.write("La palabra " + palabras[i] + " se repite: " + mapa.get(palabras[i]) + " veces. <br>");
    }

}
window.onload = ComprobarRepetidos();