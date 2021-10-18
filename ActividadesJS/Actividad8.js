//Funcion que crea la tabla de los unicode
function CrearTabla(){

    //Crear la tabla con los estilos
     document.write('<table style="border: 2px solid black">');

        //Bucle que nos saca los unicode con su numero
        for(let i =0;i<1000;i++){
            var simbolo = `&#`+i;
            document.write('<tr>');
          //Bucle que nos muestra los unicode con su numero al lado
          for(let j=0;j<1;j++){
            document.write('<td style="border: 2px solid black">'+i+'</td>');
            document.write('<td style="border: 2px solid black">'+simbolo+'</td>');
        }
            document.write('</tr>');

        }
    document.write('</table>');
    }
    //Ejecutar la funcion
    window.onload= CrearTabla();