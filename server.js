require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/db');

// Importação das rotas
const tarefaRoutes = require('./routes'); // API: /api/tasks
const userRoutes = require('./routes/userRoutes'); // se aplicável
const frontendRoutes = require('./routes/frontRoutes'); // Frontend: /tarefas

console.log("Iniciando o servidor...");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public'))); // Para arquivos estáticos (opcional)

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rotas
app.use('/api', tarefaRoutes);
app.use('/users', userRoutes); // Pode remover se não estiver usando
app.use('/', frontendRoutes);

// Página 404
app.use((req, res) => {
  res.status(404).send('Página não encontrada');
});

// Erro 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro no servidor');
});

// Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
