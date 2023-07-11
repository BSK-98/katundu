import { useDispatch } from "react-redux"
import { modelActivate } from "./modelSlice"


const ViewOrder = () => {
    const disptch = useDispatch ()
    return (
        <div className="overlay">
            <div className="model-display">
                <span className="closeBTN"  onClick={() => disptch (modelActivate ())}> X </span>
                <div className="model-area">
                    
                    <div className="settings-page flex">
                        <div className="user-con w-half h-full">
                            <h3 style={{fontWeight: 600}}>Sender</h3>
                            <div className="main-info">
                                <div className="user-info">
                                    <h3>Name: <span> John Doe</span></h3>
                                    <h3>Username: <span>John Do-50</span></h3>
                                    <h3>Company: <span>JON INc.</span></h3>
                                    <h3>Email: <span>johndoe@gmail.com</span></h3>
                                    <h3>Cell: <span>(+260) 977 777 777</span></h3>
                                    <h3>Address: <span>Makeni Vila, Lusaka, Zambia</span></h3>
                                </div>
                                <br /><br />
                                <h3 style={{fontWeight: 600}}>receiver</h3>

                                <div className="user-info">
                                    <h3>Name: <span> John Doe</span></h3>
                                    <h3>Username: <span>John Do-50</span></h3>
                                    <h3>Company: <span>JON INc.</span></h3>
                                    <h3>Email: <span>johndoe@gmail.com</span></h3>
                                    <h3>Cell: <span>(+260) 977 777 777</span></h3>
                                    <h3>Address: <span>Makeni Vila, Lusaka, Zambia</span></h3>
                                </div>
                                <div className="status-bars">
                                    <div className="p-cards">
                                        <div className="card">
                                            <h4>Transaction Status </h4>

                                            <div className="progress-bar">
                                                <div className="status-bars-info">90%</div>
                                                <div style={{width: "90%"}} className="p-bar su"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br /><br />
                                <h3 style={{fontWeight: 600}}>Order Info</h3>
                                
                                <div className="user-info">
                                    <h3>Good: <span> Grocery</span></h3>
                                    <h3>Truck: <span>Long Nose</span></h3>
                                    <h3>Company: <span>JON INc.</span></h3>
                                    <h3>Items: <span>Snack, Choclate, Juicy</span></h3>
                                    <h3>Weight: <span>500 tone</span></h3>
                                </div>
                                <br /><br />
                            </div>
                            
                        </div>
                        
                        <div className="set w-half h-full">
                            <h2>Mapping</h2>

                            <div className="card" style={{height: "100%"}}>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewOrder
