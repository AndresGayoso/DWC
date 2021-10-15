function CrearTabla(){

    var hex = 0;

    var body = document.getElementsByTagName("body")[0];

    var tabla = document.createElement("table");
    var tbody = document.createElement("tbody");

    for(var i = 0; i < 5;i++){
        var fila = document.createElement("tr");

        for(var j = 0; j < 1;j++){

            var hexadecimal = hex.toString(16);
            var decimal = "0x000" + hexadecimal;
            var mostrar = String.fromCharCode(decimal);

            var celda1 = document.createElement("td");
            var txtcelda1 = document.createTextNode(j);
            var celda2 = document.createElement("td");
            var txtcelda2 = document.createTextNode(mostrar);
            var celda3 = document.createElement("td");
            var txtcelda3 = document.createTextNode(decimal);

            celda1.appendChild(txtcelda1);
            celda2.appendChild(txtcelda2);
            celda3.appendChild(txtcelda3);

            fila.appendChild(celda1);
            fila.appendChild(celda2);
            fila.appendChild(celda3);

            hex ++;

        }

        tbody.appendChild(fila);

    }

    tabla.appendChild(tbody);
    body.appendChild(tabla);
    tabla.setAttribute("border","2");
}
window.onload = CrearTabla;