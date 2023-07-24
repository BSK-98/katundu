import { SideBar } from "."
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <div className="relative w-full">
            <SideBar />

            <div className="p-4 sm:ml-64 relative overflow-y-auto">
                <div className="p-4 border-2 border-gray-200 rounded-lg dark:border-gray-700">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Layout
