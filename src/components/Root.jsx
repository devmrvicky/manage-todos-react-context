import { Outlet } from "react-router-dom";
import Form from "./Form";
import Nav from "./Nav";
import TodoNav from "./TodoNav";

const Root = () => {
  return (
    <div>
      <Nav />
      <div className="todo-wrapper bg-slate-200 dark:bg-slate-700 p-3 mt-3 max-w-[600px] w-full mx-auto rounded-lg">
        <Form />
        <TodoNav />
        {/* <TodosList todos={todos} /> */}
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
