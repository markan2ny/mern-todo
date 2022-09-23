const router = require("express").Router();
const Todo = require("../models/Todo");

// Create new task
router.post("/api/todos", async (req, res) => {
  try {
    const addTodo = new Todo({
      text: req.body.text,
    });
    await addTodo.save();
    res.status(200).json(req.body.text + " successfully created!");
  } catch (error) {
    res.json(error);
  }
});

// Fetch tasks
router.get("/api/todos", async (req, res) => {
  const todos = await Todo.find();
  res.status(200).json(todos);
});

// Update task
router.put("/api/todos/:id", async (req, res) => {
  try {
    const updateTask = await Todo.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    });
    res.status(200).json("Task has been updated!");
  } catch (error) {
    res.json(error);
  }
});

// Delete task
router.delete("/api/todos/:id", async (req, res) => {
  try {
    const deleteTask = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).json("Task has been deleted!");
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
