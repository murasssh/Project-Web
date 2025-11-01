// main.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');
    const usernameEl = document.getElementById('username');
    const passwordEl = document.getElementById('password');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const username = usernameEl.value.trim();
        const password = passwordEl.value;

        // Simulate login verification
        if (username === 'm64x' && password === 'Mur4sxz1512@') {
            // Redirect to admin page on successful login
            window.location.href = 'admin.html';
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });
});