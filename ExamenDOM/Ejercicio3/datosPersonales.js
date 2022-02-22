function validarDatos(formulario, boton) {

    let form = document.getElementById(formulario)

    if (boton == "datos") {
        let datosP = form.getElementsByTagName("div")[0]

        let nombre = datosP.getElementsByTagName("input")[0].value

        let apellido = datosP.getElementsByTagName("input")[1].value

        let contDatos = 0;

        if (nombre != null && isNaN(nombre) && nombre != "") {
            document.getElementsByTagName("input")[0].style.backgroundColor = "white"
            contDatos++
        } else {
            document.getElementsByTagName("input")[0].style.backgroundColor = "red"
            if (datosP.getElementsByTagName("p").length == 0) {
                let p = document.createElement("p")
                p.innerHTML = "Texto Erroneo"
                p.style.color = "red"
                datosP.appendChild(p)
            } else {
                document.getElementsByTagName("p").innerHTML = "Texto Erroneo"
            }
        }

        if (apellido != null && isNaN(apellido) && apellido != "") {
            document.getElementsByTagName("input")[0].style.backgroundColor = "white"
            contDatos++
        } else {
            document.getElementsByTagName("input")[1].style.backgroundColor = "red"
            if (datosP.getElementsByTagName("p").length == 0) {
                let p = document.createElement("p")
                p.innerHTML = "Texto Erroneo"
                p.style.color = "red"
                datosP.appendChild(p)
            } else {
                document.getElementsByTagName("p")[0].style.color = "red"
                document.getElementsByTagName("p")[0].innerHTML = "Texto Erroneo"
            }
        }

        if (contDatos == 2) {
            if (datosP.getElementsByTagName("p").length == 0) {
                let p = document.createElement("p")
                p.innerHTML = nombre + " " + apellido
                p.style.color = "black"
                datosP.appendChild(p)
            } else {
                datosP.getElementsByTagName("p")[0].style.color = "red"
                datosP.getElementsByTagName("p")[0].innerHTML = "Texto Erroneo"
            }
            contDatos = 0;
        }else{
            contDatos = 0;
        }
    }else if(boton == "rango"){
        
        let rango = form.getElementsByTagName("div")[1]

        let input = document.getElementsByTagName("input")

        let edad

        for(let i = 0; i < input.length;i++){
            if(input[i].type == "radio"){
                if(input[i].checked == true){
                    edad = input[i].value
                }
            }
        }
        if (rango.getElementsByTagName("p").length == 0) {
            let p = document.createElement("p")
            p.innerHTML = `Te encuentras en el rango de edad ${edad}`
            rango.appendChild(p)
        } else {
            rango.getElementsByTagName("p")[0].innerHTML = `Te encuentras en el rango de edad ${edad}`
        }
    }
}