import { createContext, useContext, useState } from "react";
import crypto from "crypto";

const todoContext = createContext({
  todos: [],
  finishedTodos: [],
  todoAction: false,
  handleStartTodoAction: () => {},
  handleStopTodoAction: () => {},
  handleAddTodo: (todo) => {},
  handleFinishTodo: (id) => {},
});

export function useTodoContext() {
  return useContext(todoContext);
}

export default function TodoContextProvider({ children }) {
  const [todoAction, setTodoAction] = useState(false);
  const [todos, setTodos] = useState([]);
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
      updatedTodos.push({ id: crypto.randomUUID(), ...todo });
      return updatedTodos;
    });
  }

  function handleFinishTodo(id) {
    setFinishedTodos((prevFinishedTodos) => {
      const finishedTodo = todos.filter((todo) => todo.id === id);
      const updatedFinishedTodos = [...prevFinishedTodos, ...finishedTodo];
      return updatedFinishedTodos;
    });

    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos];
      const afterDeletedTodos = updatedTodos.filter((todo) => todo.id !== id);
      return afterDeletedTodos;
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
  };

  return <todoContext.Provider value={ctxValue}>{children}</todoContext.Provider>;
}
