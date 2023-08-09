import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Category from "./modules/Category"
import NotFound from "./views/error/NotFound";
import Product from "./modules/Products";

const router = createBrowserRouter([
    {
        path: "/category",
        element: <Category/>
    },
    {
       path: "/products/:categoryId",
       element: <Product/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
])
export default router