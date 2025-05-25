const tarefaModel = require('../models/tarefaModel');

exports.criarTarefa = async (req, res) => {
  const { nome, descricao } = req.body;

  try {
    const tarefa = await tarefaModel.criarTarefa(nome, descricao);
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.listarTarefas = async (req, res) => {
  try {
    const tarefas = await tarefaModel.listarTarefas();
    res.status(200).json(tarefas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.editarTarefa = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, status } = req.body;

  try {
    const tarefa = await tarefaModel.editarTarefa(id, nome, descricao, status);
    if (!tarefa) return res.status(404).json({ message: 'Tarefa não encontrada' });
    res.status(200).json(tarefa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.excluirTarefa = async (req, res) => {
  const { id } = req.params;

  try {
    const tarefa = await tarefaModel.excluirTarefa(id);
    if (!tarefa) return res.status(404).json({ message: 'Tarefa não encontrada' });
    res.status(200).json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
