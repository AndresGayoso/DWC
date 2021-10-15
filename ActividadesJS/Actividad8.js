function CrearTabla(){

     document.write('<table style="border: 2px solid black">');

            
        for(let i =0;i<1000;i++){
            var simbolo = `&#`+i;
            document.write('<tr>');
          for(let j=0;j<1;j++){
            document.write('<td style="border: 2px solid black">'+i+'</td>');
            document.write('<td style="border: 2px solid black">'+simbolo+'</td>');
        }
            document.write('</tr>');

        }
    document.write('</table>');
    }
    window.onload= CrearTabla();