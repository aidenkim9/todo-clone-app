import classes from "./NewTodo.module.css";
import TodoFormInput from "./TodoFormInput";

export default function NewTodo({ onClose, addTodo }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const todo = Object.fromEntries(formData.entries());
    addTodo(todo);
    onClose();
  }

  return (
    <form action="" onSubmit={handleSubmit} className={classes.form}>
      <TodoFormInput label="title" title="제목" />
      <TodoFormInput label="description" title="설명" type="textarea" />
      <TodoFormInput label="date" title="마감일" />

      <div className={classes["form-actions"]}>
        <button type="button" onClick={onClose} className={classes["button-text"]}>
          취소
        </button>
        <button className={classes.button}>작업 추가</button>
      </div>
    </form>
  );
}
