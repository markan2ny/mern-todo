require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const connectionDB = require("./config/Database");

connectionDB();

app.use(express.json());

const todoRouter = require("./controller/todos");

app.use("/", todoRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on ${port}`));
