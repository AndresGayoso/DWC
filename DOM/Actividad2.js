function ocultarMostra(parrafo,enlace){

    //Variable que referencia al parrafo
    var Dparrafo = document.getElementById(parrafo);

    //Variable que referencia al enlace
    var Denlace = document.getElementById(enlace);

    // Si es visible se oculta 
    if(Dparrafo.className == "visible"){
        Dparrafo.className = "ocult"
        Denlace.innerHTML = "Mostrar"
    //Si no es visible se muestras
    }else{
        Dparrafo.className = "visible"
        Denlace.innerHTML = "Ocultar"
    }


}