document.getElementById('formulario-registro').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    document.getElementById('nombre-error').textContent = '';
    document.getElementById('apellido-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('confirm-password-error').textContent = '';
    document.getElementById('fecha-error').textContent = '';
    document.getElementById('pais-error').textContent = '';
    document.getElementById('terminos-error').textContent = '';

    
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
    const fecha = document.getElementById('fecha').value;
    const pais = document.getElementById('pais').value;
    const terminos = document.getElementById('terminos').checked;

   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

   
    let isValid = true;

      if (!nombre) {
        document.getElementById('nombre-error').textContent = 'Por favor, ingresa tu nombre.';
        isValid = false;
    }

   
    if (!apellido) {
        document.getElementById('apellido-error').textContent = 'Por favor, ingresa tu apellido.';
        isValid = false;
    }

   
    if (!email) {
        document.getElementById('email-error').textContent = 'Por favor, ingresa tu correo electrónico.';
        isValid = false;
    } else if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Por favor, ingresa un correo electrónico válido.';
        isValid = false;
    }

    
    if (!password) {
        document.getElementById('password-error').textContent = 'Por favor, ingresa tu contraseña.';
        isValid = false;
    } else if (!passwordRegex.test(password)) {
        document.getElementById('password-error').textContent = 'La contraseña debe tener al menos 8 caracteres, una letra y un número.';
        isValid = false;
    }

    
    if (!confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Por favor, repite tu contraseña.';
        isValid = false;
    } else if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Las contraseñas no coinciden.';
        isValid = false;
    }

    
    if (!fecha) {
        document.getElementById('fecha-error').textContent = 'Por favor, ingresa tu fecha de nacimiento.';
        isValid = false;
    }

    
    if (pais === '0') {
        document.getElementById('pais-error').textContent = 'Por favor, selecciona tu país.';
        isValid = false;
    }

    
    if (!terminos) {
        document.getElementById('terminos-error').textContent = 'Debes aceptar los términos y condiciones.';
        isValid = false;
    }

    
    if (isValid) {
        alert('Formulario enviado correctamente.');
        
        this.submit();
    }
});