const pool = require('../config/db');

const getAllTasks = async () => {
  const result = await pool.query('SELECT * FROM tasks');
  return result.rows;
};

const createTask = async (title, description) => {
  const result = await pool.query(
    'INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *',
    [title, description]
  );
  return result.rows[0];
};

module.exports = {
  getAllTasks,
  createTask,
};
