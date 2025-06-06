console.log("Início do teste");

const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Servidor funcionando!'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor teste rodando na porta ${PORT}`);
});
