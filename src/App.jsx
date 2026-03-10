import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Contents from "./components/Contents";
import Home from "./components/Home";
import Next from "./components/Next";
import TodoContextProvider from "./store/todos-context.jsx";
import Finish from "./components/Finish.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "today", element: <Contents /> },
      { path: "next", element: <Next /> },
      { path: "finish", element: <Finish /> },
    ],
  },
]);

function App() {
  return (
    <TodoContextProvider>
      <RouterProvider router={router} />
    </TodoContextProvider>
  );
}

export default App;
