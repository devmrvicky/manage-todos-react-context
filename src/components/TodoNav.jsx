import { NavLink } from "react-router-dom";

const TodoNav = () => {
  return (
    <div className="px-4 py-1 dark:text-zinc-50 flex items-center gap-3 my-2">
      <NavLink
        to="/"
        type="button"
        className={({ isActive }) =>
          isActive
            ? `after:content-[""] after:w-full after:h-0.5 after:bg-green-600 after:absolute after:bottom-0 after:left-0 px-3 py-1 cursor-pointer text-sm rounded relative`
            : "text-zinc-400 hover:text-zinc-800 hover:bg-white/20 hover:dark:bg-slate-600 dark:text-zinc-300 hover:dark:text-white px-3 py-1 cursor-pointer text-sm rounded"
        }
      >
        All
      </NavLink>
      <NavLink
        to="/pending"
        type="button"
        className={({ isActive }) =>
          isActive
            ? `after:content-[""] after:w-full after:h-0.5 after:bg-green-600 after:absolute after:bottom-0 after:left-0 px-3 py-1 cursor-pointer text-sm rounded relative`
            : "text-zinc-400 hover:text-zinc-800 hover:bg-white/20 hover:dark:bg-slate-600 dark:text-zinc-300 hover:dark:text-white px-3 py-1 cursor-pointer text-sm rounded"
        }
      >
        Pending
      </NavLink>
      <NavLink
        to="/completed"
        type="button"
        className={({ isActive }) =>
          isActive
            ? `after:content-[""] after:w-full after:h-0.5 after:bg-green-600 after:absolute after:bottom-0 after:left-0 px-3 py-1 cursor-pointer text-sm rounded relative`
            : "text-zinc-400 hover:text-zinc-800 hover:bg-white/20 hover:dark:bg-slate-600 dark:text-zinc-300 hover:dark:text-white px-3 py-1 cursor-pointer text-sm rounded"
        }
      >
        Completed
      </NavLink>
      <NavLink
        to="/history"
        type="button"
        className={({ isActive }) =>
          isActive
            ? `after:content-[""] after:w-full after:h-0.5 after:bg-green-600 after:absolute after:bottom-0 after:left-0 px-3 py-1 cursor-pointer text-sm rounded relative`
            : "text-zinc-400 hover:text-zinc-800 hover:bg-white/20 hover:dark:bg-slate-600 dark:text-zinc-300 hover:dark:text-white px-3 py-1 cursor-pointer text-sm rounded"
        }
      >
        History
      </NavLink>
    </div>
  );
};

export default TodoNav;
