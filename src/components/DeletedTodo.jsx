import { useContextStore } from "../contexts/contextStore";
import TodosList from "./TodosList";

const DeletedTodo = () => {
  const { deletedTodos } = useContextStore();
  document.querySelector("title").textContent = "Manage todos - deleted";

  return (
    <>
      <TodosList todos={deletedTodos} deleted={true} />
    </>
  );
};

export default DeletedTodo;
