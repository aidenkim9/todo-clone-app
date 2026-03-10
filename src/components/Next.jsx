import { useTodoContext } from "../store/todos-context";
import Todos from "./Todos";

export default function Next() {
  const { todos } = useTodoContext();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const afterTodayTodos = todos.filter((todo) => {
    const due = new Date(todo.date);
    due.setHours(0, 0, 0, 0);
    return due > today;
  });

  console.log(afterTodayTodos);

  return (
    <main>
      <h1 className="title">다음</h1>
      <Todos todos={afterTodayTodos} />
    </main>
  );
}
