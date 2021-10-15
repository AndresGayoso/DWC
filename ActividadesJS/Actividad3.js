function MostrarTexto(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = parseInt(document.getElementById("edad").value);
    let salario = parseFloat(document.getElementById("salario").value);

    // salario esta entre 1000(incluido) y 2000
    if(salario >= 1000 && salario <= 2000){
        //edad mayor que 45
        if(edad > 45){
            salario = salario + ((salario * 3) / 100);
        }
        //edad menor igual 45
        if(edad <= 45){
            salario = salario + ((salario * 10) / 100);
        }
    }

    //salario es menor que 1000
    if(salario < 1000){
        //edad menor que 30
        if(edad < 30){
            salario = 1100
        }
        //edad entre 30 y 45 ambos incluidos
        if(edad >= 30 && edad <=45){
            salario = salario + ((salario * 3) / 100);
        }
        //edad mayor que 45
        if(edad > 45){
            salario = salario + ((salario * 15) / 100);
        }
    }

    //mostramos el nombre completo con su salario ya modifica y su edad
    document.write(nombre," ",apellido," tiene un salario de ",salario," con ",edad," años.");
}