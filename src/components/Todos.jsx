import { useTodoContext } from "../store/todos-context";
import classes from "./Todos.module.css";

export default function Todos({ todos, finish }) {
  const { handleFinishTodo } = useTodoContext();
  return (
    <>
      {todos && (
        <ul className={classes.todos}>
          {todos.map((todo) => (
            <li key={todo.id} className={classes.todo}>
              {!finish && (
                <button type="button" className={classes["todo-button"]} onClick={() => handleFinishTodo(todo.id)}>
                  완료
                </button>
              )}
              <span>{todo.title}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
