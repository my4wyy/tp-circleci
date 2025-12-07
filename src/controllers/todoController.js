const todoService = require("../services/todoService");

module.exports = {
  getAllTodos(req, res) {
    const todos = todoService.getAll();
    res.json(todos);
  },

  getTodoById(req, res) {
    const todo = todoService.getById(req.params.id);
    if (!todo) return res.status(404).json({ error: "Not found" });
    res.json(todo);
  },

  createTodo(req, res) {
    const newTodo = todoService.create(req.body);
    res.status(201).json(newTodo);
  },

  updateTodo(req, res) {
    const updated = todoService.update(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "Not found" });
    res.json(updated);
  },

  deleteTodo(req, res) {
    const deleted = todoService.remove(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Not found" });
    res.json({ message: "Deleted" });
  },

  // estatísticas
  getTotalCount(req, res) {
    res.json({ total: todoService.getCount() });
  },

  getCompletedCount(req, res) {
    res.json({ completed: todoService.getCompletedCount() });
  },

  getPendingCount(req, res) {
    res.json({ pending: todoService.getPendingCount() });
  }
};
