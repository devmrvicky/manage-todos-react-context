import ThemeBtn from "./ThemeBtn";

const Nav = () => {
  return (
    <nav className="bg-slate-200 dark:bg-slate-700 dark:text-white py-2 px-4 flex items-center justify-between">
      <h1 className="text-2xl">TODOs</h1>
      <ThemeBtn />
    </nav>
  );
};

export default Nav;
