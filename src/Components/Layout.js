import { Outlet } from "react-router-dom"

import Body from "./Body"
import Header from "./Header"

const Layout = () => {
    return (
        <div>
            <Header/>
             <Outlet/>
            <Body/>
        </div>
    )
}

export default Layout