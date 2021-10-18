function Cuadrados(){

    for(let i = 0; i < 2000; i++){

        document.write(' <div  style="position:absolute;margin:0px;width:50px;height:50px;background:'+getRandomColor()+';top:'+getPositionTop()+'px;left:'+getPositionLeft()+'px"></div>');

    }

}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
        for (var i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
       }
   return color;
   }

function getPositionTop(){
   var top = 0;

   top = parseInt(Math.floor(Math.random() * 870));

   return top;

}

function getPositionLeft(){
    var left = 0;

    left = parseInt(Math.floor(Math.random() * 1800));

    return left;

}
window.onload = Cuadrados();