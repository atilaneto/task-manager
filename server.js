require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const db = require('./config/db');
const routes = require('./routes');
const userRoutes = require('./routes/userRoutes');
const frontendRoutes = require('./routes/frontRoutes');

//middleware deve vir antes de qualquer rota, demorei para entender
app.use(express.json());

//view engine (ok aqui)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//rotas da API
app.use('/api', routes);

//outras rotas
app.use('/users', userRoutes);
app.use('/', frontendRoutes);

//404
app.use((req, res, next) => {
  res.status(404).send('Página não encontrada');
});

//erro interno
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Erro no servidor');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

