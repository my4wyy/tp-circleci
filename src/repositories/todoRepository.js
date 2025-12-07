let todos = [
    { id: "1", title: "Estudar CI/CD", completed: false },
    { id: "2", title: "Fazer TP de GC", completed: true }
  ];
  
  module.exports = {
    getAll() {
      return todos;
    },
  
    getById(id) {
      return todos.find(t => t.id === id);
    },
  
    create(data) {
      const newTodo = {
        id: String(Date.now()),
        title: data.title,
        completed: data.completed || false
      };
      todos.push(newTodo);
      return newTodo;
    },
  
    update(id, data) {
      const index = todos.findIndex(t => t.id === id);
      if (index === -1) return null;
  
      todos[index] = { ...todos[index], ...data };
      return todos[index];
    },
  
    remove(id) {
      const index = todos.findIndex(t => t.id === id);
      if (index === -1) return null;
  
      const removed = todos[index];
      todos.splice(index, 1);
      return removed;
    }
  };
  