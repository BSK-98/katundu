import { Outlet } from "react-router-dom"
import { BookingForm, SideBar, TopBar } from "../Components"
import { useSelector } from "react-redux"


const ClientLayout = () => {
    const model = useSelector ((state) => state.model.model)

    return (
        <>
            {
                model && <BookingForm />
            }
            
            <div className="wrapper">
                <div className="App flex">
                    <SideBar />
                    
                    <div className="app-main-display"> 
                        <TopBar />
                        <div className="main-display flex">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ClientLayout
