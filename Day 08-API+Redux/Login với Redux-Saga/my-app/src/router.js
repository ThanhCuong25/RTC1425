
import { createBrowserRouter } from 'react-router-dom';
import Ex1 from './modules/ex1';
import Login from './modules/ex1/login';
import GetUser from './modules/getuser/getuser';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/users',
        element: <Ex1 />
    },
    {
        path: '/getusers',
        element: <GetUser/>
    }
])
export default router;

