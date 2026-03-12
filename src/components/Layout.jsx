import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useTodoContext } from "../store/todos-context";
import TodoForm from "./TodoForm";

export default function Layout() {
  const { todoAction } = useTodoContext();
  return (
    <main className="main-container">
      <Sidebar />
      <div className="content-container">
        <Outlet />
        {todoAction && <TodoForm />}
      </div>
    </main>
  );
}
