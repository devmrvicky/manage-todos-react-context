import React from "react";
import { useContextStore } from "../contexts/contextStore";
import TodosList from "./TodosList";

const AllTodo = () => {
  const { todos } = useContextStore();
  document.querySelector("title").textContent = "Manage todos";

  return (
    <>
      <TodosList todos={todos} />
    </>
  );
};

export default AllTodo;
