import { useState } from "react";
import classes from "./Contents.module.css";
import NewTodo from "./NewTodo";

export default function Contents() {
  const [todoAction, setTodoAction] = useState(false);
  const [todos, setTodos] = useState([]);

  function handleTodoAction() {
    setTodoAction((prev) => !prev);
  }
  function handleAddTodo(todo) {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.push({ id: Math.random(), ...todo });
      return updatedTodos;
    });
  }
  function handleDeleteTodo(id) {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      const afterDeletedTodos = updatedTodos.filter((todo) => todo.id !== id);
      return afterDeletedTodos;
    });
  }

  return (
    <main className={classes.container}>
      <h1 className={classes.title}>오늘</h1>
      <div>
        {todos && (
          <ul className={classes.todos}>
            {todos.map((todo) => (
              <li key={todo.id} className={classes.todo}>
                <button type="button" className={classes["todo-button"]} onClick={() => handleDeleteTodo(todo.id)}>
                  완료
                </button>
                <span>{todo.title}</span>
              </li>
            ))}
          </ul>
        )}
        <div>
          {todoAction ? (
            <NewTodo onClose={handleTodoAction} addTodo={handleAddTodo} />
          ) : (
            <span onClick={handleTodoAction} className={classes["add-todo-button"]}>
              + 작업 추가
            </span>
          )}
        </div>
      </div>
    </main>
  );
}
