require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, // <-não DB_DATABASE
});

pool.connect()
  .then(() => console.log("Banco de dados conectado com sucesso"))
  .catch(err => console.error("Erro ao conectar ao banco:", err));

module.exports = pool;
