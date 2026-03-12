import { createContext, useContext, useReducer, useState } from "react";
import { v4 as uuid4 } from "uuid";

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

function todosReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const updatedTodosAdd = [...state.todos];
      updatedTodosAdd.push({ id: uuid4(), ...action.todo });
      localStorage.setItem("todos", JSON.stringify(updatedTodosAdd));
      return { ...state, todos: updatedTodosAdd };

    case "FINISH":
      const finishedTodo = state.todos.filter((todo) => todo.id === action.id);
      const updatedFinishedTodos = [...state.finishedTodos, ...finishedTodo];
      localStorage.setItem("finish-todos", JSON.stringify(updatedFinishedTodos));

      const updatedTodosFinish = [...state.todos];
      const afterDeletedTodos = updatedTodosFinish.filter((todo) => todo.id !== action.id);
      localStorage.setItem("todos", JSON.stringify(afterDeletedTodos));

      return { todos: afterDeletedTodos, finishedTodos: updatedFinishedTodos };

    case "DELETE":
      const isInTodos = state.todos.filter((todo) => todo.id === action.id)[0];
      const isInFinishedTodos = state.finishedTodos.filter((todo) => todo.id === action.id)[0];

      if (isInTodos) {
        const updatedTodos = [...state.todos];
        const afterDeletedTodos = updatedTodos.filter((todo) => todo.id !== action.id);
        localStorage.setItem("todos", JSON.stringify(afterDeletedTodos));

        return { ...state, todos: afterDeletedTodos };
      }

      if (isInFinishedTodos) {
        const updatedTodos = [...state.finishedTodos];
        const afterDeletedTodos = updatedTodos.filter((todo) => todo.id !== action.id);
        localStorage.setItem("finish-todos", JSON.stringify(afterDeletedTodos));

        return { ...state, finishedTodos: afterDeletedTodos };
      }

      return state;

    case "EDIT":
      const updatedTodosEdit = state.todos.map((t) => (t.id === action.todo.id ? { ...action.todo } : t));
      localStorage.setItem("todos", JSON.stringify(updatedTodosEdit)) || [];
      return { ...state, todos: updatedTodosEdit } || [];

    default:
      return state;
  }
}

export default function TodoContextProvider({ children }) {
  const [todoAction, setTodoAction] = useState(false);
  const [state, dispatch] = useReducer(todosReducer, undefined, () => ({
    todos: JSON.parse(localStorage.getItem("todos")),
    finishedTodos: JSON.parse(localStorage.getItem("finish-todos")),
  }));

  function handleStartTodoAction() {
    setTodoAction(true);
  }
  function handleStopTodoAction() {
    setTodoAction(false);
  }

  function handleAddTodo(todo) {
    dispatch({ type: "ADD", todo });
  }

  function handleFinishTodo(id) {
    dispatch({ type: "FINISH", id });
  }

  function handleDeleteTodo(id) {
    dispatch({ type: "DELETE", id });
  }

  function handleEditTodo(todo) {
    dispatch({ type: "EDIT", todo });
  }

  const ctxValue = {
    todos: state.todos,
    finishedTodos: state.finishedTodos,
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
