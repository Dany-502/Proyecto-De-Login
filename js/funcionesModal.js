function configurarModal(idBotonAbrir, idModal, idBotonCerrar) {
    const btnAbrir = document.getElementById(idBotonAbrir);
    const modal = document.getElementById(idModal);
    const btnCerrar = document.getElementById(idBotonCerrar);

    // Esta funcion verifica que los elementos existan en la página para evitar errores
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

    // Inicializar Modal de Registro
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