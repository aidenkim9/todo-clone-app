import classes from "./Todos.module.css";
import TodoButton from "./TodoButton";
import { useState } from "react";
import TodoForm from "./TodoForm";

export default function Todos({ todos, finish }) {
  const [isEdit, setIsEdit] = useState(false);
  function handleEdit() {
    setIsEdit(true);
  }

  function handleStopEdit() {
    setIsEdit(false);
  }

  return (
    <>
      {todos && (
        <ul className={classes.todos}>
          {todos.map((todo) => (
            <div key={todo.id}>
              <li className={classes.todo}>
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
              </li>
              {isEdit && <TodoForm prevTodo={todo} stopEdit={handleStopEdit} />}
            </div>
          ))}
        </ul>
      )}
    </>
  );
}
