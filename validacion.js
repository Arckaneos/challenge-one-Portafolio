//Haz tú validación en javascript acá
var nombre = document.getElementById("nombre__form");
var email = document.getElementById("email__form");
var asunto = document.getElementById("asunto__form");
var mensaje = document.getElementById("mensage__form");

function validarNombre() {
    var regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(nombre.value)) {
        nombre.setCustomValidity('Solo ingrese letras');
    } else {
        nombre.setCustomValidity('');
    }
}

function validarEmail() {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email.value)) {
        email.setCustomValidity('Ingrese un email válido');
    } else {
        email.setCustomValidity('');
    }
}

function validarAsunto() {
    if (asunto.value.trim() === "") {
        asunto.setCustomValidity('Ingrese un asunto');
    } else {
        asunto.setCustomValidity('');
    }
}

function validarMensaje() {
    if (mensaje.value.trim() === "") {
        mensaje.setCustomValidity('Ingrese un mensaje');
    } else {
        mensaje.setCustomValidity('');
    }
}

nombre.addEventListener("input", validarNombre);
email.addEventListener("input", validarEmail);
asunto.addEventListener("input", validarAsunto);
mensaje.addEventListener("input", validarMensaje);

nombre.addEventListener("blur", validarNombre);
email.addEventListener("blur", validarEmail);
asunto.addEventListener("blur", validarAsunto);
mensaje.addEventListener("blur", validarMensaje);
