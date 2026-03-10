import { createContext, useContext, useState } from "react";
import classes from "./Sidebar.module.css";
import SidebarItem from "./SidebarItem";
import { Link } from "react-router-dom";

// Sidebar only Context

const sidebarContext = createContext({ activeContent: "", handleActive: () => {} });

export function useSidebarContext() {
  const context = useContext(sidebarContext);
  return context;
}

// sidebar component

export default function Sidebar() {
  const [activeContent, setActiveContent] = useState(null);

  function handleActive(item) {
    setActiveContent(item);
  }

  const ctxValue = {
    activeContent,
    handleActive,
  };

  return (
    <sidebarContext.Provider value={ctxValue}>
      <div className={classes.container}>
        <header className={classes.header}>
          <p>
            <Link to="/">TTodoist</Link>
          </p>
          <p>
            <i className="fa-regular fa-map"></i>
          </p>
        </header>
        <ul className={classes["action-list"]}>
          <SidebarItem name="add-todo">
            <i className="fa-solid fa-circle-plus"></i> <span>작업추가</span>
          </SidebarItem>
          <SidebarItem name="today">
            <i className="fa-regular fa-calendar-days"></i> <span>오늘</span>
          </SidebarItem>
          <SidebarItem name="next">
            <i className="fa-regular fa-calendar-plus"></i> <span>다음</span>
          </SidebarItem>
          <SidebarItem name="finish">
            <i className="fa-regular fa-circle-check"></i> <span>완료한 작업</span>
          </SidebarItem>
        </ul>
      </div>
    </sidebarContext.Provider>
  );
}
