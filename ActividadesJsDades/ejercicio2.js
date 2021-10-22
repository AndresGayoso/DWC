function Cifrar(){
    var texto = document.getElementById("texto").value;
    var clave = document.getElementById("clave").value;

    var cifrado = "";
    var cifrar;
    var x = 0;

    for(let i = 0; i < texto.length;i++){

            numero = clave.charAt(x);
            cifrar = texto.charCodeAt(i);
        
            cifrado += ('&#'+(cifrar + parseInt(numero))+';');
        x++;
        if (x >= clave.length){
            x = 0;
        }
    }

    document.write(cifrado);
    document.write("<br>")
    document.write('Bsxixu"ìw%fn#qntudxlf');
}