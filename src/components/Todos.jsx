import classes from "./Todos.module.css";
import TodoButton from "./TodoButton";
import { useState } from "react";
import TodoForm from "./TodoForm";

export default function Todos({ todos, finish }) {
  const [isEditId, setIsEditId] = useState(null);
  function handleEdit(id) {
    setIsEditId(id);
  }
  function handleStopEdit() {
    setIsEditId(null);
  }

  return (
    <>
      {todos && (
        <ul className={classes.todos}>
          {todos.map((todo) => (
            <li key={todo.id}>
              <div className={classes.todo}>
                <div>
                  {!finish && <TodoButton action="완료" id={todo.id} />}
                  <span className={classes.title}>{todo.title}</span>
                </div>
                <p>
                  {finish ? (
                    <TodoButton action="삭제" id={todo.id} />
                  ) : (
                    <div>
                      <TodoButton action="삭제" id={todo.id} />
                      <TodoButton action="수정" id={todo.id} handleEdit={handleEdit} />
                    </div>
                  )}
                </p>
              </div>
              {isEditId === todo.id && <TodoForm prevTodo={todo} stopEdit={handleStopEdit} />}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
