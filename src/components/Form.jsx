import { useState } from "react";
import { useContextStore } from "../contexts/contextStore";

const Form = () => {
  const [todo, setTodo] = useState("");
  const { createTodos } = useContextStore();
  const handleSubmit = (e) => {
    e.preventDefault();
    createTodos(todo);
    setTodo("");
  };
  return (
    <form
      className="bg-slate-50 dark:bg-slate-600 flex items-center rounded-lg border-4 border-slate-50 dark:border-slate-600 shadow dark:focus-within:border-slate-50 focus-within:border-slate-300 focus-within:border-4"
      onSubmit={handleSubmit}
    >
      <div className="input-field w-full flex-1 ">
        <label htmlFor="todo-input" className="hidden">
          todo input
        </label>
        <input
          type="text"
          name="todo-input"
          id="todo-input"
          placeholder="Write todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="outline-none w-full bg-transparent px-3 text-lg dark:text-zinc-50"
        />
      </div>
      <button
        type="submit"
        className="rounded-r-lg px-5 py-2 bg-green-600 border border-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
};

export default Form;
