var numero;

//Funcion Dlecarada
function Escribir1(){

    for(let i = 0;i<500;i++){
        numero = Math.floor(Math.random() * 10000);
        document.write(numero,ParImpar(),"<br>");
    }

}

function ParImpar(){
    if(numero % 2 == 0){
        return " es par";
    }else{
        return " es impar";
    }
}

//Funcion Anonima
function Escribir2(){

    for(let i = 0;i<500;i++){
        numero = Math.floor(Math.random() * 10000);
        document.write(numero,Comprovar(),"<br>");
    }

}

const Comprovar = function ParImpar(){
    if(numero % 2 == 0){
        return " es par";
    }else{
        return " es impar";
    }
}

//Funcion Flechitas
function Escribir3(){

    for(let i = 0;i<500;i++){
        numero = Math.floor(Math.random() * 10000);
        document.write(numero,parImpar(),"<br>");
    }

}

const parImpar = () =>{
    if(numero % 2 == 0){
        return " es par";
    }else{
        return " es impar";
    }
}