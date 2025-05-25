const pool = require('../config/db');

exports.criarTarefa = async (nome, descricao) => {
  const query = 'INSERT INTO tasks (nome, descricao) VALUES ($1, $2) RETURNING *';
  const result = await pool.query(query, [nome, descricao]);
  return result.rows[0];
};

exports.listarTarefas = async () => {
  const result = await pool.query('SELECT * FROM tasks');
  return result.rows;
};

exports.editarTarefa = async (id, nome, descricao, status) => {
  const query = `
    UPDATE tasks
    SET nome = $1, descricao = $2, status = $3, updated_at = CURRENT_TIMESTAMP
    WHERE id = $4 RETURNING *`;
  const result = await pool.query(query, [nome, descricao, status, id]);
  return result.rows[0];
};

exports.excluirTarefa = async (id) => {
  const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};
