function Cifrar(){
    var texto = document.getElementById("texto").value;
    var clave = document.getElementById("clave").value;

    var cifrado = "";
    var cifrar;

    for(let i = 0; i < texto.length;i++){

         cifrar = texto.charCodeAt(i);
        
        cifrado += ("&#"+(cifrar + parseInt(clave))+";");

    }

    document.write(cifrado);
}