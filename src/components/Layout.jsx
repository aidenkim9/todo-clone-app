import { Outlet } from "react-router-dom";
import Sidebar from "./Sidbar";

export default function Layout({ chidren }) {
  return (
    <main className="main-container">
      <Sidebar />
      <Outlet />
    </main>
  );
}
