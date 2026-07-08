function validarsololetras() {
    var nombre = document.getElementById('nombre').value;
    var expReg = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ ]+$/;
    var esvalido = expReg.test(nombre);
    var mensajeError = document.getElementById('error-nombre');
    var mensajeExito = document.getElementById('exito-nombre');

    var nombreLimpio = nombre.trim();

    if (nombreLimpio === "") {
        mensajeError.innerText = "El nombre no puede estar vacío.";
        mensajeExito.innerText = "";
        return false;
    }
    else if (nombreLimpio.length < 3) {
        mensajeError.innerText = "El nombre debe tener al menos 3 caracteres.";
        mensajeExito.innerText = "";
        return false;
    }
    else if (esvalido) {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Nombre válido";
        return true;
    }
    else {
        mensajeError.innerText = "El nombre debe tener solo letras";
        mensajeExito.innerText = "";
        return false;
    }
}

function validarcorreoRegistro() {
    var correo = document.getElementById('username-registro').value.trim();
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esvalido = expReg.test(correo);

    var mensajeError = document.getElementById('error-correo-reg');
    var mensajeExito = document.getElementById('exito-correo-reg');

    if (correo === "") {
        mensajeError.innerText = "El correo no puede estar vacío.";
        mensajeExito.innerText = "";
        return false;
    } else if (esvalido) {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Correo válido";
        return true;
    } else {
        mensajeError.innerText = "Correo inválido";
        mensajeExito.innerText = "";
        return false;
    }
}

function validarlongitudControl() {
    let cadena = document.getElementById("num-control").value;
    let arreglo = cadena.split('').map(Number);
    var mensajeError = document.getElementById('error-control');
    var mensajeExito = document.getElementById('exito-control');

    if (cadena !== "" && isNaN(cadena)) {
        mensajeError.innerText = "Solo se permiten números";
        mensajeExito.innerText = "";
        return false;
    }

    if (arreglo.length < 6) {
        mensajeError.innerText = "El número debe tener al menos 6 dígitos (llevas " + arreglo.length + ")";
        mensajeExito.innerText = "";
        return false;
    } else {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Número válido";
        return true;
    }
}

function validarContrasenaEstricta() {
    const longitudminima = 8;
    const tienemyuscula = /[A-Z]/;
    const tieneminuscula = /[a-z]/;
    const tienenuemro = /[0-9]/;
    const tiensimbolo = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    var contraseña = document.getElementById("password-registro").value;
    var mensajeError = document.getElementById('error-contraseña-reg');
    var mensajeExito = document.getElementById('exito-contraseña-reg');

    if (!tienemyuscula.test(contraseña)) {
        mensajeError.innerText = "La contraseña debe tener al menos una mayúscula";
        mensajeExito.innerText = "";
        return false;
    } else if (!tieneminuscula.test(contraseña)) {
        mensajeError.innerText = "La contraseña debe tener al menos una minúscula";
        mensajeExito.innerText = "";
        return false;
    } else if (!tienenuemro.test(contraseña)) {
        mensajeError.innerText = "La contraseña debe tener al menos un número";
        mensajeExito.innerText = "";
        return false;
    } else if (!tiensimbolo.test(contraseña)) {
        mensajeError.innerText = "La contraseña debe tener al menos un símbolo";
        mensajeExito.innerText = "";
        return false;
    } else if (contraseña.length < longitudminima) {
        mensajeError.innerText = "La contraseña debe tener al menos 8 caracteres";
        mensajeExito.innerText = "";
        return false;
    } else {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Contraseña fuerte y válida";
        return true;
    }
}

function validarFechaNacimiento() {
    var fechaInput = document.getElementById('fecha-nac').value;
    var mensajeError = document.getElementById('error-fecha');
    var mensajeExito = document.getElementById('exito-fecha');

    if (fechaInput === "") {
        mensajeError.innerText = "Por favor selecciona una fecha.";
        mensajeExito.innerText = "";
        return false;
    }

    var fechaNacimiento = new Date(fechaInput);
    var hoy = new Date("2026-07-08");
    var edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    var mes = hoy.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    if (edad < 0) {
        mensajeError.innerText = "La fecha no puede ser del futuro.";
        mensajeExito.innerText = "";
        return false;
    } else {
        mensajeError.innerText = "";
        if (edad < 18) {
            mensajeExito.innerText = "Edad calculada: " + edad + " años Menor de edad";
        } else {
            mensajeExito.innerText = "Edad calculada: " + edad + " años Mayor de edad";
        }
        return true;
    }
}
function limpiarSpans() {
    const spans = document.querySelectorAll('#form-registro span');
    spans.forEach(span => span.innerText = '');
}