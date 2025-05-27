const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/TarefaController');

// Rotas para tarefas
router.get('/tarefas', TarefaController.listarTarefas);
router.post('/tarefas', TarefaController.criarTarefa);
router.put('/tarefas/:id', TarefaController.editarTarefa);
router.delete('/tarefas/:id', TarefaController.excluirTarefa);

module.exports = router;
