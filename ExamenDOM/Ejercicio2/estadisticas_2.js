const conteoLetras = new Map();

function mostrarEstadisticas(textareaId) {

    let txtarea = document.getElementById(textareaId).value

    let numLetras = contarLetras(txtarea)

    let datos = crearDatosEstadisticas(numLetras)

    CrearTabla(datos)

}

function CrearTabla(datos) {

    let tbody = document.createElement("tbody");

    for (let i = 0; i < datos.length; i++) {

        let tr = document.createElement("tr")

        for (let x = 0; x < datos[i].length; x++) {

            let td = document.createElement("td")

            let txt = document.createTextNode(datos[i][x])

            td.appendChild(txt)

            tr.appendChild(td)

        }

        tbody.appendChild(tr)

    }

    if(document.getElementsByTagName("tbody").length > 0){

        let old = document.getElementsByTagName("tbody")[0]
        
        document.getElementsByTagName("table")[0].replaceChild(tbody,old)

    }else{
        document.getElementsByTagName("table")[0].appendChild(tbody)
    }



}

function contarLetras(texto) {

    let numLetrasTotal = 0;
    let patron = /^[a-zA-Z]$/

    for (let letra of texto.toLowerCase()) {
        if (patron.test(letra)) {
            if (!conteoLetras.has(letra)) {
                conteoLetras.set(letra, 1);
            } else {
                conteoLetras.set(letra, conteoLetras.get(letra) + 1);
            }
            numLetrasTotal++;
        }
    }

    return numLetrasTotal;
}

function crearDatosEstadisticas(numLetrasTotal) {
    let arrayDatos = new Array();
    for (let [letra, conteo] of conteoLetras) {
        arrayDatos.push([letra, conteo, (conteo / numLetrasTotal).toFixed(2)]);
    }

    return arrayDatos;
}