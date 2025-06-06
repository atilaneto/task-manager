const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/TarefaController');

// Rotas da API de tarefas
router.get('/tasks', TarefaController.listarTarefas);
router.post('/tasks', TarefaController.criarTarefa);
router.put('/tasks/:id', TarefaController.editarTarefa);
router.delete('/tasks/:id', TarefaController.excluirTarefa);

module.exports = router;
1