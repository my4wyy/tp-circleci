const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todoController");

// CRUD básico
router.get("/", todoController.getAllTodos);
router.get("/:id", todoController.getTodoById);
router.post("/", todoController.createTodo);
router.put("/:id", todoController.updateTodo);
router.delete("/:id", todoController.deleteTodo);

// Rotas extras para gerar mais funções
router.get("/stats/count", todoController.getTotalCount);
router.get("/stats/completed", todoController.getCompletedCount);
router.get("/stats/pending", todoController.getPendingCount);

module.exports = router;
