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

  return (
    <main>
      <h1 className="title">오늘</h1>
      <div>
        {todayTodos.length > 0 && <Todos todos={todayTodos} />}
        <div>
          {!todoAction && (
            <span onClick={handleStartTodoAction} className={classes["add-todo-button"]}>
              + 작업 추가
            </span>
          )}
          {!todayTodos.length > 0 && !todoAction && <p className="empty-message">오늘 할 일을 추가해보세요!</p>}
        </div>
      </div>
    </main>
  );
}
