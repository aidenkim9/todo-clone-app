import { useTodoContext } from "../store/todos-context";
import classes from "./SidebarItem.module.css";
import { NavLink } from "react-router-dom";

export default function SidebarItem({ children, name }) {
  const { todoAction, handleStopTodoAction, handleStartTodoAction } = useTodoContext();

  return (
    <li className={`${classes.container}`}>
      {name === "add-todo" ? (
        <span onClick={todoAction ? handleStopTodoAction : handleStartTodoAction} style={{ margin: "1rem 0" }}>
          {children}
        </span>
      ) : (
        <NavLink
          to={"/" + name}
          className={({ isActive }) => (isActive ? `${classes.link} ${classes.active}` : classes.link)}
        >
          {children}
        </NavLink>
      )}
    </li>
  );
}
