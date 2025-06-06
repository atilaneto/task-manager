const express = require('express');
const router = express.Router();
const tarefaModel = require('../models/tarefaModel');

// Página inicial com links
router.get('/', (req, res) => {
  res.render('index'); // Renderiza index.ejs
});

// Página de tarefas
router.get('/tarefas', (req, res) => {
  res.render('tarefas');
});

// Dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});

// Editor - aceita id opcional
router.get('/editor/:id?', (req, res) => {
  const { id } = req.params;
  res.render('editor', { id });
});

// Tags e categorias
router.get('/tags', (req, res) => {
  res.render('tags');
});

// Modo foco - aceita id opcional
router.get('/foco/:id?', (req, res) => {
  const { id } = req.params;
  res.render('focus', { id });
});

// Visualização de projeto (com lista de tarefas)
router.get('/projeto/:id?', async (req, res) => {
  try {
    const tarefas = await tarefaModel.listarTarefas();
    res.render('projeto', {
      projetoNome: 'Meu Projeto Exemplo',
      tarefas
    });
  } catch (err) {
    res.status(500).send('Erro ao carregar a página de projeto.');
  }
});

// Página individual da tarefa
router.get('/tarefas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const tarefas = await tarefaModel.listarTarefas();
    const tarefa = tarefas.find(t => t.id == id);
    if (!tarefa) return res.status(404).send("Tarefa não encontrada");
    res.render('tarefa', { tarefa });
  } catch (err) {
    res.status(500).send("Erro ao carregar a página de tarefa.");
  }
});

module.exports = router;
