module.exports = {
    validateTodo(data) {
      if (!data.title || typeof data.title !== "string") {
        throw new Error("Invalid title");
      }
      if (data.completed !== undefined && typeof data.completed !== "boolean") {
        throw new Error("Invalid completed flag");
      }
      return true;
    }
  };
  