import classes from "./Todos.module.css";
import TodoButton from "./TodoButton";

//수정 로직 추가 및 개선
//날짜 유효성 검사
//예외 경로 리다이렉트 기능
//useReducer

export default function Todos({ todos, finish }) {
  return (
    <>
      {todos && (
        <ul className={classes.todos}>
          {todos.map((todo) => (
            <li key={todo.id} className={classes.todo}>
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
                    <TodoButton action="수정" />
                  </div>
                )}
              </p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
