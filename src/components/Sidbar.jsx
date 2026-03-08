import classes from "./Sidebar.module.css"
import SidebarItem from "./SidebarItem"

export default function Sidebar(){
    return <div className={classes.container}>
        <header className={classes.header}>
            <p>유저</p>
            <p><i className="fa-regular fa-map"></i></p>
        </header>
        <ul className={classes["action-list"]}>
            <SidebarItem><i className="fa-solid fa-circle-plus"></i> 작업추가</SidebarItem>
            <SidebarItem><i className="fa-brands fa-sistrix"></i> 검색</SidebarItem>
            <SidebarItem><i className="fa-solid fa-box-archive"></i> 관리함</SidebarItem>
            <SidebarItem><i className="fa-regular fa-calendar-days"></i> 오늘</SidebarItem>
            <SidebarItem><i className="fa-regular fa-calendar-plus"></i> 다음</SidebarItem>
            <SidebarItem><i className="fa-regular fa-circle-check"></i> 완료한 작업</SidebarItem>
            <SidebarItem>프로젝트</SidebarItem>
        </ul>
    </div>
    
}

