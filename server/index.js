require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const connectionDB = require("./config/Database");
const cors = require("cors");

connectionDB();
const app = express();

app.use(express.json());
app.use(cors());
const todoRouter = require("./controller/todos");

app.use("/", todoRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on ${port}`));
