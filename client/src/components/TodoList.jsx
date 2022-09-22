import React from "react";
import * as Fi from "react-icons/fi";
const TodoList = ({ todo }) => {
  return (
    <div className="flex flex-row justify-between border p-3 items-center mb-2">
      <span className="uppercase text-slate-600">sample</span>
      <div className="inline-flex items-center">
        <button>
          <Fi.FiTrash className="text-[red] text-lg mr-2" />
        </button>
        <button>
          <Fi.FiCheck className="text-[green] text-lg" />
        </button>
      </div>
    </div>
  );
};

export default TodoList;
