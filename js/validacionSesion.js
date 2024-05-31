document.getElementById('formulario-sesion').addEventListener('submit', function(event){
    event.preventDefault();
    
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';

   
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    let isValid = true;

    
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
    }

    
    if (isValid) {
        alert('Formulario enviado correctamente.');
        this.submit(); 
    }
});