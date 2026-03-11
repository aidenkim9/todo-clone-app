import { useTodoContext } from "../store/todos-context";
import Todos from "./Todos";

export default function Finish() {
  const { finishedTodos, todoAction } = useTodoContext();

  return (
    <div>
      <h1 className="title">완료한 작업</h1>
      {finishedTodos.length > 0 && <Todos todos={finishedTodos} finish />}
      {!finishedTodos.length > 0 && !todoAction && <p className="empty-message">완료한 작업이 없습니다!</p>}
    </div>
  );
}
