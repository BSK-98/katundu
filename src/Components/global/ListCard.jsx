import { useDispatch } from "react-redux"
import { modelActivate } from "../../App/Features/Orders/modelSlice"
import Avatar from "../../assets/icons/user.png"

const ListCard = () => {
    const disptch = useDispatch ()
    return (
        <div className="card">
            <div className="card-head list">
                <div className="user flex items-center">
                    <div className="img">
                        <img src={Avatar} alt="Avatar" />
                    </div>
                    <div className="info">
                        <h4>Jane Doe</h4>
                        <code>(+260) 977 777 777</code>
                        <h5><b>Truck: Long Nose</b></h5>
                    </div>
                </div>
                <div className="info-btns">
                    <div>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <button className="button" onClick={() => disptch (modelActivate ())}>view</button>
                </div>
            </div>
        </div>
    )
}

export default ListCard
