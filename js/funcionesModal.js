function configurarModal(idBotonAbrir, idModal, idBotonCerrar) {
    const btnAbrir = document.getElementById(idBotonAbrir);
    const modal = document.getElementById(idModal);
    const btnCerrar = document.getElementById(idBotonCerrar);

    if (btnAbrir && modal && btnCerrar) {
        // Abrir el modal
        btnAbrir.addEventListener('click', (e) => {
            e.preventDefault();
            modal.classList.remove('oculto');
        });

        // Cerrar el modal al presionar la "X"
        btnCerrar.addEventListener('click', () => {
            modal.classList.add('oculto');
        });

        // Cerrar el modal al hacer clic fuera del contenido del modal
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('oculto');
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    configurarModal('btn-abrir-modal', 'modal-registro', 'btn-cerrar-modal');

    const formRegistro = document.getElementById('form-registro');
    if (formRegistro) {
        formRegistro.addEventListener('submit', (e) => {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            alert(`¡Registro exitoso para ${nombre}!`);
            formRegistro.reset();
            document.getElementById('modal-registro').classList.add('oculto');
        });
    }

});

document.addEventListener('DOMContentLoaded', function () {
    const btnMenuUsuario = document.getElementById('user-menu-btn');
    const menuDesplegable = document.getElementById('dropdown-menu');
    const btnSalir = document.getElementById('btn-logout');

    if (btnMenuUsuario) {
        btnMenuUsuario.addEventListener('click', function (event) {
            event.stopPropagation();
            menuDesplegable.classList.toggle('mostrar');
        });
    }

    document.addEventListener('click', function () {
        if (menuDesplegable) menuDesplegable.classList.remove('mostrar');
    });

    if (btnSalir) {
        btnSalir.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = "login.html";
        });
    }

    const btnCaptura = document.getElementById('btn-abrir-modal');
    const modalRegistro = document.getElementById('modal-registro');
    const btnCerrarRegistro = document.getElementById('btn-cerrar-modal');
    const formRegistro = document.getElementById('form-registro');

    const btnAlumnos = document.getElementById('btn-abrir-modal-alumnos');
    const modalAlumnos = document.getElementById('modal-alumnos');
    const btnCerrarAlumnos = document.getElementById('btn-cerrar-modal-alumnos');
    const formAlumnos = document.getElementById('form-alumnos');

    if (btnCaptura) btnCaptura.addEventListener('click', (e) => { e.preventDefault(); modalRegistro.classList.remove('oculto'); });
    if (btnCerrarRegistro) btnCerrarRegistro.addEventListener('click', () => modalRegistro.classList.add('oculto'));

    if (btnAlumnos) btnAlumnos.addEventListener('click', (e) => { e.preventDefault(); modalAlumnos.classList.remove('oculto'); });
    if (btnCerrarAlumnos) btnCerrarAlumnos.addEventListener('click', () => modalAlumnos.classList.add('oculto'));

    if (formRegistro) {
        formRegistro.addEventListener('submit', function (e) {
            e.preventDefault();
            if (validarsololetras() && validarcorreoRegistro() && validarContrasenaEstricta()) {
                alert("¡Usuario capturado con éxito!");
                modalRegistro.classList.add('oculto');
                formRegistro.reset();
                document.getElementById('exito-nombre').innerText = "";
                document.getElementById('exito-correo-reg').innerText = "";
                document.getElementById('exito-contraseña-reg').innerText = "";
            }
        });
    }

    if (formAlumnos) {
        formAlumnos.addEventListener('submit', function (e) {
            e.preventDefault();
            if (validarlongitudControl() && validarEdad()) {
                alert("¡Alumno guardado con éxito!");
                modalAlumnos.classList.add('oculto');
                formAlumnos.reset();
                document.getElementById('exito-control').innerText = "";
                document.getElementById('exito-edad').innerText = "";
            }
        });
    }
});

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

function validarEdad() {
    var edad = document.getElementById('edad-alumno').value;
    var mensajeError = document.getElementById('error-edad');
    var mensajeExito = document.getElementById('exito-edad');

    if (edad === "") {
        mensajeError.innerText = "La edad no puede estar vacía.";
        mensajeExito.innerText = "";
        return false;
    }

    var numeroEdad = parseInt(edad);
    if (numeroEdad < 1) {
        mensajeError.innerText = "Ingresa la edad.";
        mensajeExito.innerText = "";
        return false;
    } else {
        mensajeError.innerText = "";
        if (numeroEdad < 18) {
            mensajeError.innerText = "Menor de edad";
        } else {
            mensajeExito.innerText = "Mayor de edad";
        }
        return true;
    }
}

function validarsololetras() {
    var nombre = document.getElementById('nombre').value;
    var expReg = /^[a-zA-ZÁÉÍÓÚÑáéíóúñ ]+$/;
    var esvalido = expReg.test(nombre);
    var mensajeError = document.getElementById('error-nombre');
    var mensajeExito = document.getElementById('exito-nombre');

    if (nombre.trim() === "") {
        mensajeError.innerText = "El nombre no puede estar vacío.";
        mensajeExito.innerText = "";
        return false;
    } else if (esvalido) {
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
    }
    else if (!tieneminuscula.test(contraseña)) {
        mensajeError.innerText = "La contraseña debe tener al menos una minúscula";
        mensajeExito.innerText = "";
        return false;
    }
    else if (!tienenuemro.test(contraseña)) {
        mensajeError.innerText = "La contraseña debe tener al menos un número";
        mensajeExito.innerText = "";
        return false;
    }
    else if (!tiensimbolo.test(contraseña)) {
        mensajeError.innerText = "La contraseña debe tener al menos un símbolo";
        mensajeExito.innerText = "";
        return false;
    }
    else if (contraseña.length < longitudminima) {
        mensajeError.innerText = "La contraseña debe tener al menos 8 caracteres";
        mensajeExito.innerText = "";
        return false;
    }
    else {
        mensajeError.innerText = "";
        mensajeExito.innerText = "Contraseña fuerte y válida";
        return true;
    }
}