const expressHandler = require("express-async-handler");
const Goal = require("../models/Goal");

const getUser = expressHandler(async (req, res) => {
  req.send("ss");
});

const setUser = expressHandler(async (req, res) => {
  console.log(req.body);
  res.send("SET REQUEST FROM CONTROLLER");
});

const putUser = expressHandler(async (req, res) => {
  res.send(`PUT REQUEST FROM CONTROLLER ${req.params.id}`);
});

const deleteUser = expressHandler(async (req, res) => {
  res.send(`YOU DELETED ID ${req.params.id}`);
});

module.exports = {
  getUser,
  setUser,
  putUser,
  deleteUser,
};
