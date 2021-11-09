function NoRecursiva(){
    
    limite = prompt("Escribe un numero")
    
	var fibo = [0,1];

    if(!isNaN(limite)){
	for(i=2; i < limite; i++){
        console.log(fibo);
		fibo.push(fibo[i-1] + fibo[i-2]);	
	}
    document.write(fibo)
    document.write("<br>El numero en la posicion " + limite + " es: " + fibo[limite-1]);
    }else{
        document.write("Nos has escrito un numero");
    }
}

function Recursiva(){

    limite = prompt("Escribe un numero")

    function fib(n){
        if( n == 0){
            return 0;
        }else if(n == 1){
            return 1;
        }
        else{
            return fib(n-1)+fib(n-2);
        }

    }
    document.write("El numero en la posicion " + limite + " es: " + fib(limite-1));

}