//mostrat cuadrados
function Cuadrados(){
    //bucle que crea los cuadrados en forma de div
    for(let i = 0; i < 2000; i++){
        //div con estilos(position,margin,width,height,background,top,left)
        document.write(' <div  style="position:absolute;margin:0px;width:50px;height:50px;background:'+getRandomColor()+';top:'+getPositionTop()+'px;left:'+getPositionLeft()+'px"></div>');

    }

}
//Crea el color que tendran los cuadrados de forma aleatoria
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    //bucle que saca el color hexadecimal
        for (var i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
       }
   return color;
   }
//Crea la posicion que tendran los cuadrados (altura) de forma aleatoria
function getPositionTop(){
   var top = 0;

   //Saca de forma aletoria un numero de 0 a 870
   top = parseInt(Math.floor(Math.random() * 870));

   return top;

}
//Crea la posicion que tendran los cuadrados (anchura) de forma aleatoria
function getPositionLeft(){
    var left = 0;

    //Saca de forma aletoria un numero de 0 a 18000
    left = parseInt(Math.floor(Math.random() * 1800));

    return left;

}
//Inicia la funcion que crea cuadrados nada mas abrimos la pagina
window.onload = Cuadrados();