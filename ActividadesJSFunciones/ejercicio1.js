function Escribir(){
    var numero;

    for(let i = 0;i<500;i++){
        numero = Math.floor(Math.random() * 10000);
        document.write(numero,ParImpar(numero),"<br>");
    }

}

function ParImpar(num){
    if(num % 2 == 0){
        return " es par";
    }else{
        return " es impar";
    }
}

window.onload = Escribir();