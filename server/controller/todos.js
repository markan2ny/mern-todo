const router = require("express").Router();
const Todo = require("../models/Todo");

router.post("/api/todos", async (req, res) => {
  try {
    const addTodo = new Todo({
      text: req.body.text,
    });
    const data = await addTodo.save();
    res.status(200).json("Successfully added!");
  } catch (error) {
    res.json(error);
  }
});

router.get("/api/todos", async (req, res) => {
  try {
    const allData = await Todo.find({});
    res.status(200).json(allData);
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
