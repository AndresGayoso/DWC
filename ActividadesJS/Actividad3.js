function MostrarTexto(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = parseInt(document.getElementById("edad").value);
    let salario = parseFloat(document.getElementById("salario").value);

    if(salario >= 1000 && salario <= 2000){
        if(edad > 45){
            salario = salario + ((salario * 3) / 100);
        }
        if(edad <= 45){
            salario = salario + ((salario * 10) / 100);
        }
    }

    if(salario < 1000){
        if(edad < 30){
            salario = 1100
        }
        if(edad >= 30 && edad <=45){
            salario = salario + ((salario * 3) / 100);
        }
        if(edad > 45){
            salario = salario + ((salario * 15) / 100);
        }
    }

    document.write(nombre," ",apellido," tiene un salario de ",salario," con ",edad," años.");
}