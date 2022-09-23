import React, { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import axios from "axios";
import TodoList from "./components/TodoList";
import { useEffect } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const URL = "http://localhost:3006/api/todos/";

  // Create Task
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(URL, {
        text: todo,
      });
      setTodo("");
      fetchTasks();
      setMessage(true);
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch Tasks
  const fetchTasks = async () => {
    try {
      const res = await axios.get(URL);
      setTodos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Task
  const deleteTask = async (id) => {
    try {
      const res = await axios.delete(URL + id);
      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="flex justify-center items-center mt-20">
      <Card>
        <Form
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
        />

        <TodoList
          todos={todos}
          deleteTask={deleteTask}
        />
      </Card>
    </div>
  );
};

export default App;
