import { useTodoContext } from "../store/todos-context";
import classes from "./Contents.module.css";

import Todos from "./Todos";

export default function Contents() {
  const { todos, todoAction, handleStartTodoAction } = useTodoContext();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todayTodos = todos.filter((todo) => {
    const due = new Date(todo.date);
    due.setHours(0, 0, 0, 0);

    return due.toDateString() === today.toDateString();
  });

  console.log(todayTodos);

  return (
    <main>
      <h1 className="title">오늘</h1>
      <div>
        <Todos todos={todayTodos} />
        <div>
          {!todoAction && (
            <span onClick={handleStartTodoAction} className={classes["add-todo-button"]}>
              + 작업 추가
            </span>
          )}
        </div>
      </div>
    </main>
  );
}
