const express = require('express');
const router = express.Router();
const tarefaModel = require('../models/tarefaModel');

// Página inicial
router.get('/', (req, res) => {
  res.render('menu', { title: 'Menu Principal' });
});

// Página de tarefas
router.get('/tarefas', (req, res) => {
  res.render('tarefas', { title: 'Tarefas' });
});

// Dashboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard', { title: 'Dashboard' });
});

// Editor - aceita id opcional
router.get('/editor/:id?', (req, res) => {
  const { id } = req.params;
  res.render('editor', { id, title: 'Editor de Blocos' });
});

// Tags e categorias
router.get('/tags', (req, res) => {
  res.render('tags', { title: 'Tags & Categorias' });
});

// Modo foco
router.get('/foco/:id?', (req, res) => {
  const { id } = req.params;
  res.render('foco', { id, title: 'Modo Foco' });
});

// Visualização de projeto
router.get('/projeto/:id?', async (req, res) => {
  try {
    const tarefas = await tarefaModel.listarTarefas();
    res.render('projeto', {
      projetoNome: 'Meu Projeto Exemplo',
      tarefas,
      title: 'Projeto'
    });
  } catch (err) {
    console.error(err);
    res.status(500).render('500', { title: 'Erro no Projeto' });
  }
});

// Página individual da tarefa
router.get('/tarefas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const tarefas = await tarefaModel.listarTarefas();
    const tarefa = tarefas.find(t => t.id == id);
    if (!tarefa) return res.status(404).render('404', { title: 'Tarefa não encontrada' });

    res.render('tarefa', { tarefa, title: tarefa.nome });
  } catch (err) {
    console.error(err);
    res.status(500).render('500', { title: 'Erro ao carregar tarefa' });
  }
});

module.exports = router;
