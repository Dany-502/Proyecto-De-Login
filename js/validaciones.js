/* --- Funciones de Utilería --- */

/*validarCorreo(correo) → boolean — valida formato de correo electrónico*/
function validarCorreo(correo) {
    let expr = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return expr.test(correo);
}

/*soloLetras(texto) → boolean — solo letras mayúsculas/minúsculas, acepta vocales acentuadas*/
function soloLetras(texto) {
    let expr = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return expr.test(texto);
}

/*validarLongitud(numero) → boolean — valida longitud de un número */
function validarLongitud(numero) {
    let valor = String(numero).trim();
    return valor.length === 6;
}

/*calcularEdad(fechaNacimiento) → número entero — calcula edad a partir de fecha de nacimiento*/
function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    const fechaNa = new Date(fechaNacimiento);
    let edad = fechaActual.getFullYear() - fechaNa.getFullYear();
    const mes = fechaActual.getMonth() - fechaNa.getMonth();
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNa.getDate())) {
        edad--;
    }
    return edad;
}

/*esMayorDeEdad(fechaNacimiento) → boolean — valida si es mayor de edad*/
function esMayorDeEdad(fecha) {
    const edad = calcularEdad(fecha);
    return edad >= 18;
}

/*validarPassword(password) → boolean — requiere mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres */
function validarPassword(password) {
    let expr = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#%&*=])[A-Za-z\d@#%&*=]{8,}$/;
    return expr.test(password);
}

/*esFechaFutura(fechaStr) → boolean — valida si una fecha es posterior a la fecha actual*/
function esFechaFutura(fechaStr) {
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
    const fechaIngresada = new Date(fechaStr + "T00:00:00");
    return fechaIngresada > fechaActual;
}


/* --- Funciones de UI vinculadas a los Inputs --- */

function validarsololetras() {
    var nombre = document.getElementById('nombre').value;
    var mensajeError = document.getElementById('error-nombre');
    var mensajeExito = document.getElementById('exito-nombre');
    var nombreLimpio = nombre.trim();

    if (nombreLimpio === "") {
        mensajeError.innerText = "El nombre no puede estar vacío.";
        mensajeExito.innerText = "";
        return false;
    } else if (soloLetras(nombre)) {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Nombre válido";
        return true;
    } else {
        mensajeError.innerText = "El nombre debe tener solo letras";
        mensajeExito.innerText = "";
        return false;
    }
}

function validarcorreoRegistro() {
    var correo = document.getElementById('username-registro').value.trim();
    var mensajeError = document.getElementById('error-correo-reg');
    var mensajeExito = document.getElementById('exito-correo-reg');

    if (correo === "") {
        mensajeError.innerText = "El correo no puede estar vacío.";
        mensajeExito.innerText = "";
        return false;
    } else if (validarCorreo(correo)) {
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
    var mensajeError = document.getElementById('error-control');
    var mensajeExito = document.getElementById('exito-control');

    if (cadena === "") {
        mensajeError.innerText = "El número de control no puede estar vacío.";
        mensajeExito.innerText = "";
        return false;
    }

    if (isNaN(cadena)) {
        mensajeError.innerText = "Solo se permiten números";
        mensajeExito.innerText = "";
        return false;
    }

    if (!validarLongitud(cadena)) {
        mensajeError.innerText = "El número debe tener exactamente 6 dígitos";
        mensajeExito.innerText = "";
        return false;
    } else {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Número válido";
        return true;
    }
}

function validarContrasenaEstricta() {
    var contraseña = document.getElementById("password-registro").value;
    var mensajeError = document.getElementById('error-contraseña-reg');
    var mensajeExito = document.getElementById('exito-contraseña-reg');

    if (contraseña === "") {
        mensajeError.innerText = "La contraseña no puede estar vacía.";
        mensajeExito.innerText = "";
        return false;
    }

    if (validarPassword(contraseña)) {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Contraseña fuerte y válida";
        return true;
    } else {
        mensajeError.innerText = "Contraseña inválida (mín. 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial: @#%&*=)";
        mensajeExito.innerText = "";
        return false;
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

    if (esFechaFutura(fechaInput)) {
        mensajeError.innerText = "La fecha no puede ser del futuro.";
        mensajeExito.innerText = "";
        return false;
    }

    const edad = calcularEdad(fechaInput);
    if (esMayorDeEdad(fechaInput)) {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Edad calculada: " + edad + " años (Mayor de edad)";
        return true;
    } else {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Edad calculada: " + edad + " años (Menor de edad)";
        return true;
    }
}

function limpiarSpans() {
    const spans = document.querySelectorAll('#form-registro span');
    spans.forEach(span => span.innerText = '');
}