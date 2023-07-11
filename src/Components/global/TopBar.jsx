import { useDispatch } from "react-redux"
import { activateModel } from "../../App/Features/Orders/modelSlice"
import Avatar from "../../assets/icons/user.png"


const TopBar = () => {
    const disptch = useDispatch ()
    
    return (
        <nav className="navigations w-full flex justify-between items-center">
            <h2 className="capitalize">
                <button 
                    className="button"
                    onClick={() => disptch (activateModel ("Book Now"))}
                >
                    Book Now
                </button>
                <button 
                    className="button btn2"
                    onClick={() => disptch (activateModel ("Book Later"))}
                >
                    Book Later
                </button>
            </h2>
            <div className="flex justify-end items-center">
                <div className="user-avatar rounderd">
                    <img src={Avatar} alt="Avatar" />
                </div>
            </div>
        </nav>
    )
}

export default TopBar
