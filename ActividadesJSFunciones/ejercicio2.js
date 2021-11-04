var tablas;
var fila;
var columna;
var color;

//Funcion crear una tabla negra de 10 filas y 4 columnas
function Tabla1(){

    //Declaramos las filas, columnas y el color
    fila = 10;
    columna = 4;
    color = "black";

    //Creamos la tabla(borde 3px,color negro,borde junto,ancho toda la pagina y alto 20%)
    document.write('<table border="3" style="border-color:' + color +';border-collapse: collapse;width:100%;height:20%;">');
    //Bucle para crear las filas
    for(let i = 0; i < fila;i++){
        //Creamos la fila
        document.write("<tr>");
        //Bucle para crear la columnas
        for(let x = 0; x < columna ;x++){
            //Creamos la columna(color del texto blanco para que se transparente y el ancho es el ancho de la pagina dividido el numero de columnas)
            document.write('<td style="color:white;width:'+(100 / columna)+'%;">1</td>');
        }
        document.write("</tr>");
    }
    document.write("</table>");

}

//Funcion crear una tabla negra de 20 filas y 10 columnas
function Tabla2(){

    //Declaramos las filas, columnas y el color
    fila = 20;
    columna = 10;
    color = "black";

    //Creamos la tabla(borde 3px,color negro,borde junto,ancho toda la pagina y alto 40%)
    document.write('<table border="3" style="border-color:' + color +';border-collapse: collapse;width:100%;height:40%;">');
    //Bucle para crear las filas
    for(let i = 0; i < fila;i++){
        //Creamos la fila
        document.write("<tr>");
        //Bucle para crear la columnas
        for(let x = 0; x < columna ;x++){
            //Creamos la columna(color del texto blanco para que se transparente y el ancho es el ancho de la pagina dividido el numero de columnas)
            document.write('<td style="color:white;width:'+(100 / columna)+'%;">1</td>');
        }
        document.write("</tr>");
    }
    document.write("</table>");

}

//Funcion crear 10 tablas verdes de 5 filas y 4 columnas
function Tabla3(){

    //Declaramos las tablas,filas, columnas y el color
    tablas = 10;
    fila = 5;
    columna = 4;
    color = "green";

    //Bucle para crear las tablas
    for(let z = 0; z < tablas;z++){
        //Creamos la tabla(borde 3px,color negro,borde junto,ancho toda la pagina y alto 20%)
        document.write('<table border="3" style="margin-bottom:10px;border-color:' + color +';border-collapse: collapse;width:100%;height:20%;">');
        //Bucle para crear las filas
        for(let i = 0; i < fila;i++){
            //Creamos la fila
            document.write("<tr>");
            //Bucle para crear la columnas
            for(let x = 0; x < columna ;x++){
                //Creamos la columna(color del texto blanco para que se transparente y el ancho es el ancho de la pagina dividido el numero de columnas)
                document.write('<td style="color:white;width:'+(100 / columna)+'%;">1</td>');
            }
            document.write("</tr>");
        }
        document.write("</table>");
    }

}