import React from "react";
import * as Fi from "react-icons/fi";
const Form = ({ handleSubmit, todo, setTodo }) => {
  return (
    <form
      className="flex flex-row items-center mb-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter text here.."
        className="border border-yellow-400 mr-1 bg-transparent focus:outline-none p-2 w-full"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button className="p-3 px-4 border border-yellow-400">
        <Fi.FiPlus className="text-yellow-400" />
      </button>
    </form>
  );
};

export default Form;
