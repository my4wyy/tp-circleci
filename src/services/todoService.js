const repo = require("../repositories/todoRepository");
const { validateTodo } = require("../helpers/validation");

module.exports = {
  getAll() {
    return repo.getAll();
  },

  getById(id) {
    return repo.getById(id);
  },

  create(data) {
    validateTodo(data);
    return repo.create(data);
  },

  update(id, data) {
    validateTodo(data);
    return repo.update(id, data);
  },

  remove(id) {
    return repo.remove(id);
  },

  // estatísticas  
  getCount() {
    return repo.getAll().length;
  },

  getCompletedCount() {
    return repo.getAll().filter(t => t.completed).length;
  },

  getPendingCount() {
    return repo.getAll().filter(t => !t.completed).length;
  }
};
