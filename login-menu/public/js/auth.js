// auth.js
(function() {
  const form = document.getElementById('loginForm');
  const usernameEl = document.getElementById('username');
  const passwordEl = document.getElementById('password');
  const status = document.getElementById('status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    const username = usernameEl.value.trim();
    const password = passwordEl.value;

    try {
      const resp = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ username, password })
      });

      if (resp.ok) {
        // login ok -> redireciona para a página admin (rota protegida)
        window.location.href = '/admin.html';
        return;
      }
      const data = await resp.json().catch(() => ({}));
      status.textContent = data.message || 'Usuário ou senha incorretos.';
    } catch (err) {
      status.textContent = 'Erro de conexão.';
      console.error(err);
    }
  });
})();