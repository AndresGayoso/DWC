function crearTablaColores(tablaColores,numColores){

    // Filas que solicita el usuario
    let filas = document.getElementById(numColores).value

    // Condicional debe ser un numero entre 1 y 20
    if(!isNaN(filas) && filas >= 1 && filas <=20){

        // Elemento tabla
        let tabla = document.getElementById(tablaColores)

        // Numero de columnas
        let columnas = tabla.rows[0].cells.length;

        // Agregamos las nuevas filas
        tabla.appendChild(crearTabla(filas,columnas))

        // Variable (Array con los colores aleatorios)
        let colores = RandomColors(filas);

        // Introducir los valores en la tabla que hemos creado
        introducirDatosTabla(tabla,colores)

    }

    // Deshabilita la celda Num.Colores
    document.getElementById(numColores).setAttribute("disabled", "disabled")

}

function crearTabla(numFila,NumColumna){

    // Creamos el tbody
    let tbody = document.createElement("TBODY")

    //Bucle para rellenar el tbody
    for(let i = 0; i < numFila; i++){

        // Creamos el tr
        let tr = document.createElement("TR")

        // Bucle que rellena el tr (segun el numero de columnas)
        for(let x = 0; x < NumColumna;x++){

            // Creamos el td
            let td = document.createElement("TD")

            // Agregamos el td al tr
            tr.appendChild(td)

        }
        
        // Agregamos el tr al tbody
        tbody.appendChild(tr);

    }

    // Devuelve el tbody con las celdas y columnas vacias
    return tbody;

}

function RandomColors(numFila){

    // Iniciar array
    let randomColors = new Array

    // Bucle tantos colores como filas tenga la tabla
    for(let i = 0; i < numFila;i++){

        // Valores random del 0 al 255
        rojo = Math.floor(Math.random() * 256)
        verde = Math.floor(Math.random() * 256)
        azul = Math.floor(Math.random() * 256)

        // Rellenamos con los valores random que acabamos de obtener
        randomColors[i] = [rojo,verde,azul]

    }

    // Devuelve el array de colores random
    return randomColors;


}

function introducirDatosTabla(tabla,datos){

    // Le resto 1 porque la primera fila no la debemos contar
    let filas = tabla.rows.length - 1;

    // Bucle que recorre las filas
    for (let i = 0; i < filas;i++){

        // Numero de celdas que hay en la fila
        let columnas = tabla.rows[i].cells.length

        //Bucle que recorre las columnas de la fila
        for(let x = 0; x < columnas;x++){

            // Condicional: Si no es la ultima columna rellena cada celda con el numero adecuado
            if ((columnas - 1) != x){

                //Ponemos i + 1 (la primera fila no cuenta)
                tabla.rows[i +1].cells[x].innerHTML = datos[i][x]

            // Sino pone el color de fondo
            }else{

                //Ponemos i + 1 (la primera fila no cuenta)
                tabla.rows[i + 1].cells[x].style.backgroundColor =
                "rgb(" + datos[i][0] + "," + datos[i][1] + "," + datos[i][2] + ")"

            }

        }

    }


}

function permutarfilas(tablaColores,fila1,fila2){

}

function cambiarFondo(tablaColores,filaFondo){

    let tabla = document.getElementById(tablaColores)

    let fila = document.getElementById(filaFondo).value

    let NumFilas = tabla.rows.length;

    if(!isNaN(fila) && fila >= 1 && fila < NumFilas && NumFilas > 1){

        let NumColumna = tabla.rows[fila].cells.length - 1;

        let color = new Array

        for (let i = 0; i < NumColumna; i++){
            color[i] = tabla.rows[fila].cells[i].innerHTML;
        }

        document.body.style.backgroundColor = 
        "rgb(" + color[0] + "," + color[1] + "," + color[2] + ")"

    }

}