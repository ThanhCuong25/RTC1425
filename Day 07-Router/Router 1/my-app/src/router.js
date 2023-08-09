import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import NotFound from "./views/errors/NotFound";
import Header from "./views/layouts/Header";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
        children:[
            {
                path: '/about',
                element: <About/>
            },
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
        ]
    },  
    {
        path: '*',
        element: <NotFound></NotFound>
    }
]);
export default router;