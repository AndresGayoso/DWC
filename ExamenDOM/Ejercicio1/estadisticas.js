document.addEventListener("DOMContentLoaded", function(event) {
    let cabecera = ['LETRA','NºVECES','%APARICIONES'];

    let tabla = document.createElement("tabla")

    tabla.setAttribute("borer","10px")

    let tbody = document.createElement("tbody")

    let tr = document.createElement("tr")

    tr.style.textAlign = "center"
    
    for(let i = 0; i < cabecera.length;i++){

        let td = document.createElement("td")

        td.style.width= "250px";

        let txt = document.createTextNode(cabecera[i])

        td.appendChild(txt)

        tr.appendChild(td)
    }
    
    tbody.appendChild(tr)

    tabla.appendChild(tbody)

    document.body.appendChild(tabla)

 });




