function Cuadrados(){
    var htmlElements = "";

    for (let i = 0; i < 7;i++){
        htmlElements += '<div id="box"></div>'
    }
    var container = document.getElementById("container");
    container.innerHTML = htmlElements;
    var box = document.getElementById("box");
    box.style.backgroundColor = getRandomColor();

}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
        for (var i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
       }
   return color;
   }
window.onload = Cuadrados();