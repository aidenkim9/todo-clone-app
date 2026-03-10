import { useTodoContext } from "../store/todos-context";
import Todos from "./Todos";

export default function Finish() {
  const { finishedTodos } = useTodoContext();

  return (
    <div>
      <h1 className="title">완료한 작업</h1>
      <Todos todos={finishedTodos} finish={true} />
    </div>
  );
}
