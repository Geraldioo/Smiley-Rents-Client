import { Outlet } from "react-router-dom"
import Navbar from "./NavBar"

const MainLayout = () => {
    return (
        <>
            <Navbar /> 
            <Outlet />
        </>
    )
}

export default MainLayout