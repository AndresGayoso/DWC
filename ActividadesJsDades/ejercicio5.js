function verificacion(){

    //Variable para que acabe el bucle
    var verificar = false;
    var verificar2 = false;

    //Contraseña
    var passwd;

    //variables para ver si se cumplen los requisitos
    var comprobar;

    //Variables para verificar
    var mayusculas = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    var minusculas = "abcdefghijklmnñopqrstuvwxyz";
    var numeros = "0123456789";
    var simbolos = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz0123456789"

    while(!verificar){

        comprobar = 0;

        var usuario = prompt("Escribe el nombre de usuario");

        if (usuario == null){
            document.write("Se ha acabado el programa");
            verificar = true;
        } 

        for(let i = 0; i < usuario.length;i++){
            if(mayusculas.indexOf(usuario.charAt(i)) != -1 ){
                comprobar++;
                break;
            } 
        }

        for(let i = 0; i < usuario.length;i++){
            if(simbolos.indexOf(usuario.charAt(i)) == -1 ){
                comprobar ++;
                break;
            }            
        }

        if(comprobar == 0){
            verificar = true;
        }


    }

   

    //Bucle para verificar la contraseña
    while(!verificar2){

        comprobar = 0;

        //Escribimos la contraseña
        passwd = prompt("Escribe una contraseña");
        
        //Cancela el programa
        if (passwd == null){
            document.write("Se ha acabado el programa");
            verificar2 = true;
        }       

        //Verificar minusculas
        for(let i = 0; i < passwd.length;i++){
            if(minusculas.indexOf(passwd.charAt(i)) != -1 ){
                comprobar++;
                break;
            } 
        }

        //Verifica mayusculas
        for(let i = 0; i < passwd.length;i++){
            if(mayusculas.indexOf(passwd.charAt(i)) != -1 ){
                comprobar++;
                break;
            } 
        }

        //Verifica numeros
        for(let i = 0; i < passwd.length;i++){
            if(numeros.indexOf(passwd.charAt(i)) != -1 ){
                comprobar++;
                break;
            } 
        }

        //Verifica simbolos
        for(let i = 0; i < passwd.length;i++){
            if(simbolos.indexOf(passwd.charAt(i)) == -1 ){
                comprobar ++;
                break;
            }            
        }

        //Si todo esta correcto mostramos el texto y acaba el programa
        if(comprobar == 4){
            document.write("Usuario: ",usuario);
            document.write("<br>Contraseña: ",passwd);
            document.write("<br>Los datos se han almacenado correctamente");
            verificar2 = true;
        }

    }

}
window.onload = verificacion();