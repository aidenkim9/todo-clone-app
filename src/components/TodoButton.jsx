import { useTodoContext } from "../store/todos-context";
import classes from "./TodoButton.module.css";

export default function TodoButton({ action, id, handleEdit }) {
  const { handleFinishTodo, handleDeleteTodo } = useTodoContext();

  function deleteTodoHandler() {
    if (window.confirm("정말 삭제하겠습니까?")) {
      handleDeleteTodo(id);
    } else {
      return;
    }
  }

  return (
    <button
      type="button"
      className={action === "삭제" ? classes["todo-button-text"] : classes["todo-button"]}
      onClick={
        action === "완료" ? () => handleFinishTodo(id) : action === "삭제" ? deleteTodoHandler : () => handleEdit(id)
      }
    >
      {action}
    </button>
  );
}
