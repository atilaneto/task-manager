require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/db');
const expressLayouts = require('express-ejs-layouts');

// Importação das rotas
const tarefaRoutes = require('./routes');
const userRoutes = require('./routes/userRoutes'); // (remova se não usar)
const frontendRoutes = require('./routes/frontRoutes');

console.log("Iniciando o servidor...");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View Engine + Layouts
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(expressLayouts);
app.set('layout', 'layout'); // usa views/layout.ejs como base

// Variável global para evitar erro de undefined em <%= title %>
app.use((req, res, next) => {
  res.locals.title = '';
  next();
});

// Rotas
app.use('/api', tarefaRoutes);
app.use('/users', userRoutes);
app.use('/', frontendRoutes);

// Página 404
app.use((req, res) => {
  res.status(404).render('404', { title: 'Página não encontrada' });
});

// Página 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', { title: 'Erro no Servidor' });
});


// Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
