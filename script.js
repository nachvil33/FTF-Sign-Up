document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Simula la validación del nombre de usuario y contraseña.
        // Comprueba si coinciden con tus criterios.
        if (isValidCredentials(username, password)) {
            redirectToLandingPage(username);
        } else {
            // Muestra un mensaje de error si las credenciales son incorrectas.
            alert('Invalid username or password. Please try again.');
        }
    });

    const createAccountBtn = document.getElementById('create-account-btn');
    createAccountBtn.addEventListener('click', function() {
        // Aquí puedes agregar la lógica para crear una cuenta nueva.
        // Por simplicidad, puedes redirigir al usuario a una página de registro (signup.html).
        window.location.href = 'signup.html';
    });

    // Función para verificar las credenciales (simulación).
    function isValidCredentials(username, password) {
        // Aquí puedes implementar tus propias reglas de validación.
        // En este ejemplo, verificamos si el nombre de usuario es "demo" y la contraseña es "password".
        return username === 'demo' && password === 'password';
    }

    // Función para redirigir a la página de "Landing" del usuario.
    function redirectToLandingPage(username) {
        // En este ejemplo, redirigimos al usuario a una página personalizada basada en su nombre de usuario.
        // Puedes personalizar esta lógica según tus necesidades.
        window.location.href = `landing/${username}.html`;
    }
});
