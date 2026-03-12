import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useTodoContext } from "../store/todos-context";
import TodoForm from "./TodoForm";
import { useState } from "react";

export default function Layout() {
  const { todoAction } = useTodoContext();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen((prev) => !prev);
  }

  function closeSidebar() {
    setSidebarOpen(false);
  }
  return (
    <main className="main-container">
      {/* 햄버거 버튼 — 모바일에서만 보임 */}
      <button className="hamburger" onClick={toggleSidebar} aria-label="메뉴 열기">
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* 오버레이 — 사이드바 열릴 때 배경 클릭으로 닫기 */}
      {sidebarOpen && <div className="sidebar-overlay" onClick={closeSidebar} style={{ display: "block" }} />}
      <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
      <div className="content-container">
        <Outlet />
        {todoAction && <TodoForm />}
      </div>
    </main>
  );
}
