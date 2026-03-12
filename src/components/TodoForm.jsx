import { useState } from "react";
import { useTodoContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";
import TodoFormInput from "./TodoFormInput";

export default function TodoForm({ prevTodo, stopEdit }) {
  const [error, setError] = useState(null);
  const { handleStopTodoAction, handleAddTodo, handleEditTodo } = useTodoContext();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const todo = Object.fromEntries(formData.entries());

    const inputDate = new Date(todo.date);
    inputDate.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (inputDate < today) {
      setError("유효한 마감일을 입력해주세요.");
      return;
    }

    if (prevTodo) {
      todo.id = prevTodo.id;
      handleEditTodo(todo);
      stopEdit();
      return;
    }

    handleAddTodo(todo);
    handleStopTodoAction();
  }

  return (
    <form action="" onSubmit={handleSubmit} className={classes.form}>
      <TodoFormInput label="title" title="제목" defaultValue={prevTodo && prevTodo.title} />
      <TodoFormInput label="description" title="설명" type="textarea" defaultValue={prevTodo && prevTodo.description} />
      <TodoFormInput label="date" title="마감일" defaultValue={prevTodo && prevTodo.date} />
      {error && <p style={{ fontSize: "14px", color: "#DC4B3E" }}>{error}</p>}

      <div className={classes["form-actions"]}>
        <button type="button" onClick={prevTodo ? stopEdit : handleStopTodoAction} className={classes["button-text"]}>
          취소
        </button>
        <button className={classes.button}>{prevTodo ? "수정" : "작업 추가"}</button>
      </div>
    </form>
  );
}
