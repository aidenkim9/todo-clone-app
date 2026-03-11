import { createContext, useContext, useState } from "react";
import { v4 as uuid4 } from "uuid";

// useReducer로 변경하기

const todoContext = createContext({
  todos: [],
  finishedTodos: [],
  todoAction: false,
  handleStartTodoAction: () => {},
  handleStopTodoAction: () => {},
  handleAddTodo: (todo) => {},
  handleFinishTodo: (id) => {},
  handleDeleteTodo: (id) => {},
  handleEditTodo: (todo) => {},
});

export function useTodoContext() {
  return useContext(todoContext);
}

export default function TodoContextProvider({ children }) {
  const localTodos = JSON.parse(localStorage.getItem("todos"));
  const [todoAction, setTodoAction] = useState(false);
  const [todos, setTodos] = useState(localTodos || []);
  const [finishedTodos, setFinishedTodos] = useState([]);

  function handleStartTodoAction() {
    setTodoAction(true);
  }
  function handleStopTodoAction() {
    setTodoAction(false);
  }

  function handleAddTodo(todo) {
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      updatedTodos.push({ id: uuid4(), ...todo });
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }

  function handleFinishTodo(id) {
    setFinishedTodos((prevFinishedTodos) => {
      const finishedTodo = todos.filter((todo) => todo.id === id);
      const updatedFinishedTodos = [...prevFinishedTodos, ...finishedTodo];
      localStorage.setItem("finish-todos", JSON.stringify(updatedFinishedTodos));
      return updatedFinishedTodos;
    });

    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      const afterDeletedTodos = updatedTodos.filter((todo) => todo.id !== id);
      localStorage.removeItem("todos");
      localStorage.setItem("todos", JSON.stringify(afterDeletedTodos));
      return afterDeletedTodos;
    });
  }

  function handleDeleteTodo(id) {
    const isInTodos = todos.filter((todo) => todo.id === id)[0];
    const isInFinishedTodos = finishedTodos.filter((todo) => todo.id === id)[0];

    if (isInTodos) {
      setTodos((prevTodos) => {
        const updatedTodos = [...prevTodos];
        const afterDeletedTodos = updatedTodos.filter((todo) => todo.id !== id);
        localStorage.removeItem("todos");
        localStorage.setItem("todos", JSON.stringify(afterDeletedTodos));
        return afterDeletedTodos;
      });

      if (isInFinishedTodos) {
        setFinishedTodos((prevTodos) => {
          const updatedTodos = [...prevTodos];
          const afterDeletedTodos = updatedTodos.filter((todo) => todo.id !== id);
          localStorage.removeItem("finish-todos");
          localStorage.setItem("finish-todos", JSON.stringify(afterDeletedTodos));
          return afterDeletedTodos;
        });
      }
    }
  }

  function handleEditTodo(todo) {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((t) => (t.id === todo.id ? { ...todo } : t));
      localStorage.removeItem("todos");
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  }

  const ctxValue = {
    todos,
    finishedTodos,
    todoAction,
    handleStartTodoAction,
    handleStopTodoAction,
    handleAddTodo,
    handleFinishTodo,
    handleDeleteTodo,
    handleEditTodo,
  };

  return <todoContext.Provider value={ctxValue}>{children}</todoContext.Provider>;
}
