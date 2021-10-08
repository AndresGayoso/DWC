function CalcularSalario(){

    let salario = parseFloat(document.getElementById("salario").value);

    if(salario >= 1000 && salario <= 2000){
        if(edad > 45){

        }
        if(edad <= 45){
            
        }

    }




}





function MostrarTexto(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    var edad = parseInt(document.getElementById("edad").value);
    let salario = CalcularSalario(); 
    document.write(nombre," ",apellido," tiene un salario de ",salario," con ",edad," años.");
}