import React , { lazy, Suspense, useContext, useState }from "react";
import { createRoot } from "react-dom/client";
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import { Provider } from "react-redux";

import Header from "./src/Components/Header";
import Body from "./src/Components/Body";
import About from "./src/Components/About";
import Error from "./src/Components/Error";
import Contact from "./src/Components/Contact";
import RestaurantMenu from "./src/Components/RestaurantMenu";
import Cart from "./src/Components/Cart";
import { UserContext } from "./src/utils/UserContext";
import appStore from "./src/Store/appStore";
import UserName from "./src/Components/UserName";

const About = lazy(()=> import("./src/Components/About"))

const AppLayout = () => {
    const {myName} = useContext(UserContext)
    const [userName, setUserName] = useState(myName)
    
    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{myName:userName, setUserName}}>
                <div className="bg-yellow-400 flex justify-center bg-gradient-to-t from-black">
                    <Header/>
                    <Outlet/>
                </div>
            </UserContext.Provider>
        </Provider>
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
                element: <UserName/>
            },
            {
                path: "/browse",
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
                path:"browse/restaurants/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ]
        
    },
    
])
const root = createRoot(document.getElementById("root"))

root.render(<RouterProvider router = {appRouter}/>)