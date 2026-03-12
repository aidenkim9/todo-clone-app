import { useTodoContext } from "../store/todos-context";
import classes from "./SidebarItem.module.css";
import { NavLink } from "react-router-dom";

export default function SidebarItem({ children, name, onClose }) {
  const { todoAction, handleStopTodoAction, handleStartTodoAction } = useTodoContext();

  function handleAddTodoClick() {
    todoAction ? handleStopTodoAction() : handleStartTodoAction();
    onClose(); // 모바일에서 사이드바 닫기
  }

  return (
    <li className={`${classes.container}`}>
      {name === "add-todo" ? (
        <span onClick={handleAddTodoClick} style={{ margin: "1rem 0" }}>
          {children}
        </span>
      ) : (
        <NavLink
          to={"/" + name}
          onClick={onClose}
          className={({ isActive }) => (isActive ? `${classes.link} ${classes.active}` : classes.link)}
        >
          {children}
        </NavLink>
      )}
    </li>
  );
}
