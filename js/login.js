const formulario = document.getElementById('login');
formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    const correo = document.getElementById('username').value;
    const contrasena = document.getElementById('password').value;

    console.log("Correo ingresado:", correo);
    console.log("Contraseña ingresada:", contrasena);

    if (correo === "miguel@gmail.com" && contrasena === "Mike123!") {
        window.location.href = "dashboard.html";
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Cuenta o contraseña incorrectos',
            text: 'Intenta de nuevo.',
            confirmButtonColor: 'blue'
        });
        return;
    }
});

function validarcorreo() {
    var correo = document.getElementById('username').value.trim();
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var esvalido = expReg.test(correo);

    var mensajeError = document.getElementById('error-correo');
    var mensajeExito = document.getElementById('exito-correo');

    if (correo === "") {
        mensajeError.innerText = "El correo no puede estar vacío.";
        mensajeExito.innerText = "";
        return false;
    } else if (esvalido) {
        mensajeError.innerText = "";
        mensajeExito.innerText = "";
        return true;
    } else {
        mensajeError.innerText = "Correo inválido";
        mensajeExito.innerText = "";
        return false;
    }
}

function validarlongitud() {
    let cadena = document.getElementById("celular").value; //* se debe modificar
    let arreglo = cadena.split('').map(Number);
    var mensajeError = document.getElementById('error-celular');
    var mensajeExito = document.getElementById('exito-celular');
    if (arreglo.length != 10) {
        mensajeError.innerText = "El número debe tener 10 dígitos";
        mensajeExito.innerText = "";
    } else {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Número válido";
    }
}

function validarcontrasena() {

    var contrasena = document.getElementById('password').value.trim();
    var mensajeError = document.getElementById('error-contraseña');
    var mensajeExito = document.getElementById('exito-contraseña');

    if (contrasena === "") {
        mensajeError.innerText = "La contraseña no puede estar vacía.";
        mensajeExito.innerText = "";
        return false;
    } else {
        mensajeError.innerText = "";
        mensajeExito.innerText = "";
        return true;
    }
}