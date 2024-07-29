import React , { lazy, Suspense }from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"

import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import About from "./src/Components/About";
import Error from "./src/Components/Error";
import Contact from "./src/Components/Contact";
import RestaurantMenu from "./src/Components/RestaurantMenu";


const AppLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        errorElement: <Error/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <Suspense fallback={<h1>Lazy loading is done on About component</h1>}>
                    <About/>
                </Suspense>,
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path:"restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ]
        
    },
    
])
const root = createRoot(document.getElementById("root"))

root.render(<RouterProvider router = {appRouter}/>)