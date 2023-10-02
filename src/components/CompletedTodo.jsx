import React from "react";
import { useContextStore } from "../contexts/contextStore";
import TodosList from "./TodosList";

const CompletedTodo = () => {
  const { todos } = useContextStore();
  const completedTodos = todos.filter((todo) => todo.isCompleted);
  document.querySelector("title").textContent = "Manage todos - completed";
  return (
    <>
      <TodosList todos={completedTodos} />
    </>
  );
};

export default CompletedTodo;
