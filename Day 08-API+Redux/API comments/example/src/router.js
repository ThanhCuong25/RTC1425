import { createBrowserRouter } from "react-router-dom";
import Users from "./modules/Users";
import TodoList from "./modules/todoList/TodoList";

const router = createBrowserRouter([
    {
        path:"/",
        element: <TodoList/>
    }
])
export default router