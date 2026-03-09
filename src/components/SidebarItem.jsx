import { useSidebarContext } from "./Sidbar";
import classes from "./SidebarItem.module.css";
import { Link } from "react-router-dom";

export default function SidebarItem({ children, name }) {
  const { activeContent, handleActive } = useSidebarContext();

  return (
    <li className={`${classes.container} ${activeContent === name ? classes.active : ""}`}>
      <Link to={"/" + name} onClick={() => handleActive(name)} className={classes.link}>
        {children}
      </Link>
    </li>
  );
}
