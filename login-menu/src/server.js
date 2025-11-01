const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // support json
app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // ajustar secure:true em HTTPS
}));

// User credentials (hashed for security)
const adminUser = {
  username: 'm64x',
  passwordHash: crypto.createHash('sha256').update('Mur4sxz1512@').digest('hex'),
};

// Block direct access to admin.html unless session is admin
app.use((req, res, next) => {
  if (req.path === '/admin.html' || req.path === '/admin') {
    if (req.session && req.session.user && req.session.user.role === 'admin') {
      return next();
    }
    return res.redirect('/');
  }
  next();
});

// Serve public after the admin-check middleware
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.post('/login', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ success: false, message: 'Missing credentials' });
  }
  const passwordHash = crypto.createHash('sha256').update(password).digest('hex');

  if (username === adminUser.username && passwordHash === adminUser.passwordHash) {
    req.session.user = { username: adminUser.username, role: 'admin' };
    return res.json({ success: true });
  }
  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

app.get('/admin', (req, res) => {
  if (req.session.user && req.session.user.role === 'admin') {
    return res.sendFile(path.join(__dirname, '../public/admin.html'));
  }
  res.status(403).send('Access denied');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});