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

module.exports = router;
