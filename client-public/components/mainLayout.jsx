import { Outlet } from "react-router-dom"
import Navbar from "./NavBar"

const MainLayout = () => {
    return (
        <>
            <Navbar /> 
            {/* <Carousel /> */}
            <Outlet />
        </>
    )
}

export default MainLayout