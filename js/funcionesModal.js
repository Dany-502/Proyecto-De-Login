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
            window.location.href = "index.html";
        });
    }

    const btnCaptura = document.getElementById('btn-abrir-modal');
    const modalRegistro = document.getElementById('formulario-captura');

    if (btnCaptura) {
        btnCaptura.addEventListener('click', (e) => {
            e.preventDefault();
            modalRegistro.style.display = 'block';
        });
    }

    const btnGuardarAlumno = document.getElementById('btn-guardar-alumno');
    if (btnGuardarAlumno) {
        btnGuardarAlumno.addEventListener('click', function (e) {
            e.preventDefault();

            // Ejecutar todas las validaciones
            const esNombreValido = validarsololetras();
            const esCorreoValido = validarcorreoRegistro();
            const esControlValido = validarlongitudControl();
            const esContrasenaValido = validarContrasenaEstricta();
            const esFechaValido = validarFechaNacimiento();

            // Si alguna validación falla, no guardamos
            if (!esNombreValido || !esCorreoValido || !esControlValido || !esContrasenaValido || !esFechaValido) {
                return;
            }
            const fechaInput = document.getElementById('fecha-nac').value;
            const fechaNacimiento = new Date(fechaInput);
            const hoy = new Date();
            let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
            const mes = hoy.getMonth() - fechaNacimiento.getMonth();

            if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
                edad--;
            }

            const esMayorDeEdad = edad >= 18 ? "Mayor de edad" : "Menor de edad";
            const condicionEdad = `${edad} años (${esMayorDeEdad})`;

            // Rellenar datos en el modal de confirmación
            document.getElementById('conf-nombre').innerText = document.getElementById('nombre').value;
            document.getElementById('conf-correo').innerText = document.getElementById('username-registro').value;
            document.getElementById('conf-control').innerText = document.getElementById('num-control').value;
            document.getElementById('conf-edad').innerText = condicionEdad;

            // Mostrar el modal
            const modalConfirmacion = document.getElementById('modal-confirmacion');
            if (modalConfirmacion) {
                modalConfirmacion.classList.remove('oculto');
            }
        });
    }

    // Configurar el cierre del modal de confirmación
    const btnCerrarConf = document.getElementById('btn-cerrar-confirmacion');
    const btnAceptarConf = document.getElementById('btn-aceptar-confirmacion');

    const cerrarModalConfirmacion = () => {
        const modalConfirmacion = document.getElementById('modal-confirmacion');
        if (modalConfirmacion) {
            modalConfirmacion.classList.add('oculto');
        }
        // Limpiar los inputs y los mensajes de error/éxito
        const inputs = document.querySelectorAll('#form-registro input');
        inputs.forEach(input => input.value = '');
        if (typeof limpiarSpans === 'function') {
            limpiarSpans();
        }
    };

    if (btnCerrarConf) {
        btnCerrarConf.addEventListener('click', cerrarModalConfirmacion);
    }
    if (btnAceptarConf) {
        btnAceptarConf.addEventListener('click', cerrarModalConfirmacion);
    }

    const btnLimpiar = document.getElementById('btn-limpiar');
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function () {
            const inputs = document.querySelectorAll('#form-registro input');
            inputs.forEach(input => input.value = '');
            if (typeof limpiarSpans === 'function') {
                limpiarSpans();
            }
        });
    }
});