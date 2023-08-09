import { createBrowserRouter } from 'react-router-dom'
import Users from './pages/Users'
import Add from './pages/Add'
import Edit from './pages/Edit'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Users />
    },
    {
        path: '/create',
        element:<Add/>
    },
    {
        path: '/update/:id',
        element:<Edit/>
    }
])
export default router