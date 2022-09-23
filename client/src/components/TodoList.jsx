import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Item from "./Item";

const TodoList = ({ todos, deleteTask }) => {
  return todos.length === 0 ? (
    <div className="text-center">
      <h1 className="text-3xl text-slate-300 ">NO TASK</h1>
    </div>
  ) : (
    todos.map((todo) => (
      <Item
        todo={todo.text}
        key={todo._id}
        deleteTask={() => deleteTask(todo._id)}
      />
    ))
  );
};

export default TodoList;
