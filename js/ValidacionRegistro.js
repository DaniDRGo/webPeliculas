document.getElementById('formulario-registro').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Limpiar mensajes de error previos
    document.getElementById('nombre-error').textContent = '';
    document.getElementById('apellido-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('confirm-password-error').textContent = '';
    document.getElementById('fecha-error').textContent = '';
    document.getElementById('pais-error').textContent = '';
    document.getElementById('terminos-error').textContent = '';

    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const fecha = document.getElementById('fecha').value;
    const pais = document.getElementById('pais').value;
    const terminos = document.getElementById('terminos').checked;

    // Expresión regular para validar el email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Expresión regular para validar la contraseña (mínimo 8 caracteres, al menos una letra y un número)
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    // Variable para controlar si el formulario es válido
    let isValid = true;

    // Validación del nombre
    if (!nombre) {
        document.getElementById('nombre-error').textContent = 'Por favor, ingresa tu nombre.';
        isValid = false;
    }

    // Validación del apellido
    if (!apellido) {
        document.getElementById('apellido-error').textContent = 'Por favor, ingresa tu apellido.';
        isValid = false;
    }

    // Validación del correo electrónico
    if (!email) {
        document.getElementById('email-error').textContent = 'Por favor, ingresa tu correo electrónico.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Por favor, ingresa un correo electrónico válido.';
        isValid = false;
    }

    // Validación de la contraseña
    if (!password) {
        document.getElementById('password-error').textContent = 'Por favor, ingresa tu contraseña.';
        isValid = false;
    } else if (!passwordRegex.test(password)) {
        document.getElementById('password-error').textContent = 'La contraseña debe tener al menos 8 caracteres, una letra y un número.';
        isValid = false;
    }

    // Validación de la confirmación de la contraseña
    if (!confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Por favor, repite tu contraseña.';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Las contraseñas no coinciden.';
        isValid = false;
    }

    // Validación de la fecha
    if (!fecha) {
        document.getElementById('fecha-error').textContent = 'Por favor, ingresa tu fecha de nacimiento.';
        isValid = false;
    }

    // Validación del país
    if (pais === '0') {
        document.getElementById('pais-error').textContent = 'Por favor, selecciona tu país.';
        isValid = false;
    }

    // Validación de los términos y condiciones
    if (!terminos) {
        document.getElementById('terminos-error').textContent = 'Debes aceptar los términos y condiciones.';
        isValid = false;
    }

    // Si todas las validaciones pasan, puedes proceder con el envío del formulario
    if (isValid) {
        alert('Formulario enviado correctamente.');
        // Aquí puedes agregar el envío del formulario, como una solicitud AJAX, si es necesario
        // this.submit(); // Descomenta esta línea si deseas enviar el formulario después de la validación
    }
});