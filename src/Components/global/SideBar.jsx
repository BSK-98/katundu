import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { page } from "../../App/Features/UI/UISlice"
import Avatar from "../../assets/icons/user.png"

const SideBar = () => {
    const disptch = useDispatch ()
    const pageChange = useSelector ((state) => state.UISlice.page)
    console.log(pageChange);
    return (
        <div className="side-bar">
                <div className="logo">
                    <div className="img rounderd">
                        <img src={Avatar} alt="LOGO" />
                    </div>
                    <h1>Katundu</h1>
                </div>
                <menu>
                    <nav>
                        <Link onClick={() => disptch(page (''))} className={pageChange == '' ? 'active' : ''} to="/app">Home</Link>
                        <Link onClick={() => disptch(page ('dashboard'))} className={pageChange == 'dashboard' ? 'active' : ''} to="/app/dashboard">Dashboard</Link>
                        <Link onClick={() => disptch(page ('orders'))} className={pageChange == 'orders' ? 'active' : ''} to="/app/orders">Orders</Link>
                        {/* <Link onClick={() => disptch(page ('jobs'))} className={pageChange == 'jobs' ? 'active' : ''} to="/app/jobs">Jobs</Link> */}
                        <Link onClick={() => disptch(page ('quatations'))} className={pageChange == 'quatations' ? 'active' : ''} to="/app/quatations">quatations</Link>
                        <Link onClick={() => disptch(page ('settings'))} className={pageChange == 'settings' ? 'active' : ''} to="/app/settings">Settings</Link>
                    </nav>
                    <div className="user">
                        <div className="img rounderd">
                            <img src={Avatar} alt="Avatar" />
                        </div>
                        <h3>John Doe</h3>
                        <span>johndoe@katundu.africa</span>
                    </div>
                    <div className="logout">
                        <a href="#"></a>
                    </div>
                </menu>
            </div>
    )
}

export default SideBar
