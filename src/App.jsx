import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Contents from "./components/Contents";
import Today from "./components/Today";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Contents /> },
      { path: "today", element: <Today /> },
      { path: "search", element: <h1>Search</h1> },
      { path: "next", element: <h1>Next</h1> },
      { path: "add-todo", element: <h1>Add todo</h1> },
      { path: "archive", element: <h1>Archive</h1> },
      { path: "finish", element: <h1>Finish</h1> },
      { path: "projects", element: <h1>finish</h1> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
