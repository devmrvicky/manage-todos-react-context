import { useEffect, useState } from "react";
import Root from "./components/Root";
import ContextProvider from "./contexts/contextStore";
import Form from "./components/Form";
import Nav from "./components/Nav";
import TodoNav from "./components/TodoNav";
import { Outlet } from "react-router-dom";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [todos, setTodos] = useState([]);
  const [deletedTodos, setDeletedTodos] = useState([]);

  const createTodos = (todo) => {
    setTodos((prevTodos) => [
      { id: Date.now(), todo, isCompleted: false },
      ...prevTodos,
    ]);
  };
  const changeStatus = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };
  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, todo: updatedTodo } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    const todosClone = structuredClone(todos);
    setDeletedTodos(todosClone.filter((todo) => todo.id == id));
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <ContextProvider
      value={{
        theme,
        setTheme,
        todos,
        createTodos,
        changeStatus,
        updateTodo,
        deleteTodo,
        deletedTodos,
      }}
    >
      <div>
        <Nav />
        <div className="todo-wrapper bg-slate-200 dark:bg-slate-700 p-3 mt-3 max-w-[600px] w-full mx-auto rounded-lg">
          <Form />
          <TodoNav />
          {/* <TodosList todos={todos} /> */}
          <Outlet />
        </div>
      </div>
    </ContextProvider>
  );
};

export default App;
