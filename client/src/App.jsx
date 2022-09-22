import React, { useState } from "react";
import Card from "./components/Card";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, { todo }]);
  };
  console.log(todos);

  return (
    <div className="flex justify-center items-center mt-20">
      <Card>
        <Form
          handleSubmit={handleSubmit}
          todo={todo}
          setTodo={setTodo}
        />

        {todos.map((todo) => (
          <TodoList
            key={todo}
            todo={todo}
          />
        ))}
      </Card>
    </div>
  );
};

export default App;
