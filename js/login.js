function ingresarData(){
    var us = document.getElementById("usuario");
    var con = document.getElementById("contrasenia");
    var er = document.querySelector(".error");

    var usuario = perfil[0];
    var contraseña = 1234;
    var correcto = false;


    while (correcto == false){
        //var user = prompt("Ingrese usuario");
        //var password = prompt("Ingrese contraseña"); 
        if (contraseña == document.querySelector("#contrasenia").value && usuario == document.querySelector("#usuario").value){
            alert("¡Ingresó correctamente!");
            mostrarPerfil()
        }
        else{
            document.querySelector(".error").style.display = "block";
            document.querySelector(".error").innerHTML = "Datos incorrectos, volvé a intentar.";
            //alert("Datos incorrectos, vuelva a intentar");
            correcto = true;
        }
    }
}

function mostrarPerfil(){
    var id_main = 
        "<div id='caja'>" +
            "<h3>" + perfil[0] + "</h3>" +
            "<p>" + perfil[1] + "</p>" +
            "<img src=" + perfil[3] + ">" + "</img>" +
            "<h4>" + perfil[4] + "</h4>" +
            "<hr>" +
            "<a href='#'>" + perfil[2] + "</a>" +
            "<button id='agregarInfo'> Agregar descripcion </button>" +
            "<div id='info'></div>" +
        "</div>"
    document.querySelector("#main").innerHTML = id_main;
    var boton = document.getElementById("agregarInfo");
    boton.addEventListener("click", fnAgregarInfo);
}

function fnAgregarInfo(){
    var parrafo = prompt("¿Qué quiere agregar al perfil?");
    var informacion = document.getElementById("info");
    informacion.innerHTML = parrafo;
}

var perfil = ["Ana", 16, "anacc11104@gmail.com","img/chica2.jpg", "Ingenieria",]

