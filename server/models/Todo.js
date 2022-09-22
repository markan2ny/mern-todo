const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "This field is required"],
  },
});

module.exports = mongoose.model("todo", TodoSchema);
