function Validar(){

    var url = prompt("Escribe la url: ");

    condicion = /http:\/{0,3}([a-zA-Z0-9-.]+:?([\w][\W])*) | ([a-zA-Z0-9-.])+ | ([\w]+[\W]*)@$/

    texto = /([a-z] | [0-9]):$/

    //([a-z][A-Z][0-9])*

    if(condicion.test(url) == true){
        document.write("t")
    }else{
        document.write("f")
    }

    if(texto.test(url) == true){
        document.write("<br>t")
    }else{
        document.write("<br>f")
    }


}
window.onload = Validar();