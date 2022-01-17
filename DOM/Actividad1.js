window.onload = function(){

    //Coger el elmento info para meter informacion
    var info = document.getElementById("info")

    //Extraer enlaces
    var enlaces = document.getElementsByTagName("a")

    //Extraer Parrafos
    var parrafo = document.getElementsByTagName("p")

    //Nº de enlaces que apuntan a http://prueba/
    var contador = 0;
    for(let i = 0; i < enlaces.length; i++){
        if(enlaces[i].href == "http://prueba/"){
            contador++;
        }
    }

    //Extraer en nº de enlaces por parrafo y meter en un array
    var pEnlaces;
    var pEnlacesArray = new Array;
    for(let i = 0; i < parrafo.length;i++){
        pEnlaces = parrafo[i].getElementsByTagName("a");
        pEnlacesArray[i] = pEnlaces.length;
    }

    //Mostrar el nº de enlaces por parrafo
    var parrafos = "";
    for(let i = 0; i < parrafo.length;i++){
        parrafos += "Nombre d'enllaços del paràgraf " + (i+1) + " = " + pEnlacesArray[i] + "<br>"
    }

    //Informacion por pantalla
    info.innerHTML = 
    "Nombre d'enllaços de la pàgina = " + enlaces.length + "<br>" + 
    "Nombre de paràgrafs = " + parrafo.length + "<br>"+
    "El penultim enllaç apunta a = " + enlaces[enlaces.length - 2].href + "<br>" +
    "L'ultim enllaç apunta a = " + enlaces[enlaces.length - 1].href + "<br>" +
    contador + " enllaços apunten a http://prueba" + "<br>"+
    parrafos;





}