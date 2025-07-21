import { Outlet } from "react-router-dom"
import Navbar from "./components/navbar"

const Layout = () => {
    return (
        <div className="w-full min-h-dvh bg-gray-100 flex items-center justify-start flex-col">
            <Navbar />
            <main className="w-full max-w-6xl flex items-start justify-center">
                <Outlet />
            </main>
        </div>
    )
}

export default Layout