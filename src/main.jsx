import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PendingTodo from "./components/PendingTodo.jsx";
import CompletedTodo from "./components/CompletedTodo.jsx";
import AllTodo from "./components/AllTodo.jsx";
import DeletedTodo from "./components/DeletedTodo.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<AllTodo />} />
      <Route path="/pending" element={<PendingTodo />} />
      <Route path="/completed" element={<CompletedTodo />} />
      <Route path="/history" element={<DeletedTodo />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
