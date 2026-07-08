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
            // Simulación — las validaciones las implementará Mike
            alert("¡Usuario capturado con éxito!");
            
            // Limpiar los inputs manualmente (no es un form)
            const inputs = document.querySelectorAll('#form-registro input');
            inputs.forEach(input => input.value = '');
        });
    }

    const btnLimpiar = document.getElementById('btn-limpiar');
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', function () {
            const inputs = document.querySelectorAll('#form-registro input');
            inputs.forEach(input => input.value = '');
        });
    }
});