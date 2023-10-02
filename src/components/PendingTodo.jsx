import React from "react";
import { useContextStore } from "../contexts/contextStore";
import TodosList from "./TodosList";

const PendingTodo = () => {
  const { todos } = useContextStore();
  const pendingTodos = todos.filter((todo) => !todo.isCompleted);
  document.querySelector("title").textContent = "Manage todos - pending";

  return (
    <>
      <TodosList todos={pendingTodos} />
    </>
  );
};

export default PendingTodo;
