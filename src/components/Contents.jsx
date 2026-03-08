import classes from "./Contents.module.css"

export default function Contents(){
    
    return <main className={classes.container}>
        <h1 className={classes.title}>오늘</h1>
        <div>
            <ul></ul>
            <p>
                <span>+ 작업 추가</span>
            </p>
        </div>
        </main>
}