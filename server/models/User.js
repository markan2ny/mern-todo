const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "This field is required!"],
  },
});

module.exports = mongoose.model("User", UserSchema);
