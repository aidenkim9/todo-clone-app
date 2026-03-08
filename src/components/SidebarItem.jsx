import classes from "./SidebarItem.module.css"

export default function SidebarItem ({children}){
    return <li className={classes.container}>
              {children}
            </li>
}