require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectionDB = require("./config/Database");
const User = require("./models/User");
const Todo = require("./models/Todo");

const app = express();
app.use(express.json());
app.use(cors());

// Call the database function
connectionDB();
const port = process.env.PORT || 8000;

//Routes
app.get("/api/todos", (req, res) => {
  res.send("Hi");
});

// Port running on the server
app.listen(port, () => console.log(`Server is running on ${port}`));
