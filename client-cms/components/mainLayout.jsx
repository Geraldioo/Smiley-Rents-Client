import { Outlet } from "react-router-dom"
import Navbar from "./navbar"
import Sidebar from "./sidebar"

const MainLayout = () => {
    return (
        <>
            <Navbar /> 
            <Sidebar />
            <Outlet />
        </>
    )
}

export default MainLayout