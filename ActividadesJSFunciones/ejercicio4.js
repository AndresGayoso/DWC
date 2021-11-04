function OrdenarAlReves(){

    var acabar = false;
    var palabras = [];
    var contador = 0;

    while(!acabar){
        palabras[contador] = prompt("Escribe una palabra: ");
        if(palabras[contador] == null){
            acabar = true;
        }
        if(palabras[contador].trim() == ""){
            acabar = true;
        }
        contador++;
    }

    palabras.sort((a,z) => z.toLowerCase().localeCompare(a.toLowerCase()));
	document.write(palabras);
}
window.onload = OrdenarAlReves();