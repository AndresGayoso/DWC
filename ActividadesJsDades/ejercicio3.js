function loteria(){

    //Iniciar el array
    var loteria = [];

    //Declarar variables
    var uno,dos,tres,cuatro,cinco,seis;

    //Bucle que saca los 50 numeros de la loteria
    for(let x = 0; x < 50; x++){
        //Bucle que rellena el array con numeros de 1 al 49
        for(let i = 0; i < 49;i++){
            loteria[i] = i + 1;
         } 
         //Nos saca un numero aletoria del array
         uno = loteria[Math.floor(Math.random() * loteria.length)];
         //Elimina ese numero para que no se repita
         loteria.splice (uno - 1,1);
         dos = loteria[Math.floor(Math.random() * loteria.length)];
         loteria.splice (dos - 1,1);
         tres = loteria[Math.floor(Math.random() * loteria.length)];
         loteria.splice (tres - 1,1);
         cuatro = loteria[Math.floor(Math.random() * loteria.length)];
         loteria.splice (cuatro - 1,1);
         cinco = loteria[Math.floor(Math.random() * loteria.length)];
         loteria.splice (cinco - 1,1);
         seis = loteria[Math.floor(Math.random() * loteria.length)];
         loteria.splice (seis - 1,1);
         
         //Mostrar la combinacion de numeros
         document.write(uno + " " + dos + " " + tres + " " + cuatro + " " + cinco + " " + seis);
         document.write("<br>");
    }

}
window.onload = loteria();