// import { useContextStore } from "../contexts/contextStore";
import TodoItem from "./TodoItem";

const TodosList = ({ todos, deleted }) => {
  // const { todos } = useContextStore();
  // console.log(todos);
  return (
    <div className="todo-items flex flex-col gap-2 h-[455px] overflow-auto">
      {todos.length ? (
        todos.map((todo) => (
          <div key={todo.id}>
            <TodoItem todo={todo} deleted={deleted} />
          </div>
        ))
      ) : (
        <div className="italic text-xl text-center py-3 text-gray-500">
          You have not todo
        </div>
      )}
    </div>
  );
};

export default TodosList;
