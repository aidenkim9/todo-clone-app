import { Outlet } from "react-router-dom";
import Sidebar from "./Sidbar";
import { useTodoContext } from "../store/todos-context";
import NewTodo from "./NewTodo";

export default function Layout() {
  const { todoAction } = useTodoContext();
  return (
    <main className="main-container">
      <Sidebar />
      <div className="content-container">
        <Outlet />
        {todoAction && <NewTodo />}
      </div>
    </main>
  );
}
