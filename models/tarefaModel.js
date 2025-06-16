const pool = require('../config/db');

exports.criarTarefa = async (nome, descricao) => {
  try {
    const query = 'INSERT INTO tarefas (nome, descricao) VALUES ($1, $2) RETURNING *';
    const result = await pool.query(query, [nome, descricao]);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao criar tarefa:', err);
    throw err;
  }
};

exports.listarTarefas = async () => {
  try {
    const result = await pool.query('SELECT * FROM tarefas');
    return result.rows;
  } catch (err) {
    console.error('Erro ao listar tarefas:', err);
    return [];
  }
};

exports.editarTarefa = async (id, nome, descricao, status) => {
  try {
    const query = `
      UPDATE tarefas
      SET nome = $1, descricao = $2, status = $3, updated_at = CURRENT_TIMESTAMP
      WHERE id = $4 RETURNING *`;
    const result = await pool.query(query, [nome, descricao, status, id]);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao editar tarefa:', err);
    throw err;
  }
};

exports.excluirTarefa = async (id) => {
  try {
    const result = await pool.query('DELETE FROM tarefas WHERE id = $1 RETURNING *', [id]);
    return result.rows[0];
  } catch (err) {
    console.error('Erro ao excluir tarefa:', err);
    throw err;
  }
};
