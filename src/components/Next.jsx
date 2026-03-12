import { useTodoContext } from "../store/todos-context";
import Todos from "./Todos";

export default function Next() {
  const { todos, todoAction } = useTodoContext();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const afterTodayTodos = todos.filter((todo) => {
    const due = new Date(todo.date);
    due.setHours(0, 0, 0, 0);
    return due > today;
  });

  return (
    <main>
      <h1 className="title">다음</h1>
      {afterTodayTodos.length > 0 && <Todos todos={afterTodayTodos} />}
      {afterTodayTodos.length === 0 && !todoAction && <p className="empty-message">다음 할 일을 추가해보세요!</p>}
    </main>
  );
}
