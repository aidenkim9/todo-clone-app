import { useState } from "react"
import classes from "./Contents.module.css"
import NewTodo from "./NewTodo"

export default function Contents(){
    const [addTodo, setAddTodo] = useState(false)

    function handleAddTodo(){
        setAddTodo(prev => !prev)
    }
    
    return <main className={classes.container}>
        <h1 className={classes.title}>오늘</h1>
        <div>
            <ul></ul>
            <div>
                {addTodo ? <NewTodo onClose={handleAddTodo} /> : <span onClick={handleAddTodo} className={classes["add-todo-button"]}>+ 작업 추가</span>}
                
            </div>
        </div>
        </main>
}