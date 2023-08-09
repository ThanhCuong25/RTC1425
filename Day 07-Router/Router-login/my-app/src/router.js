import { createBrowserRouter, redirect } from "react-router-dom"
import routes from "./routes"
import Login from "./modules/Login"
import NotFound from "./modules/NotFound"
import Access from "./modules/Access"

const router = createBrowserRouter([
    {
        path: routes.web.authentication.login,
        element: <Login/>
    },
    {
        path: routes.web.authentication.access,
        element: <Access/>
    },
    {
        path: '*',
        element: <NotFound />
    }
])
export default router