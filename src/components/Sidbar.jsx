import classes from "./Sidebar.module.css"

export default function Sidebar(){
    return <div className={classes.container}>
        <header className={classes.header}>
            <p>유저</p>
            <p><i class="fa-regular fa-map"></i></p>
        </header>
        <ul className={classes["action-list"]}>
            <li>
              <i class="fa-solid fa-circle-plus"></i> 작업추가
            </li>
            <li>
               <i class="fa-brands fa-sistrix"></i> 검색
            </li>
            <li>
              <i class="fa-solid fa-box-archive"></i> 관리함
            </li>
            <li>
               <i class="fa-regular fa-calendar-days"></i> 오늘
            </li>
            <li>
               <i class="fa-regular fa-calendar-plus"></i> 다음
            </li>
            <li>
               <i class="fa-regular fa-circle-check"></i> 완료한 작업
            </li>
            <li>
                프로젝트
            </li>
        </ul>
    </div>
    
}

