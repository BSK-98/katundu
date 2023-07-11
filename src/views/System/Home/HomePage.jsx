import { useSelector } from "react-redux"
import ViewOrder from "../../../App/Features/Orders/ViewOrder"
import { ListCard } from "../../../Components"


const HomePage = () => {
    const model = useSelector ((state) => state.model.viewModel)
    return (
        <>
            { model && <ViewOrder /> }
            <div className="main-display flex">
                
                <div className="display-left">
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                </div>

                {/* <!-- MAP --> */}
                <div className="display-right Map">

                    {/* <!-- JOB INFO --> */}
                    <div className="map-info flex justify-between items-center">
                        <div>
                            <span></span>
                            <div>
                                <h4>Pinkup point</h4>
                                <code>Makeni Mall</code>
                            </div>
                            
                        </div>
                        <div>
                            <span></span>
                            <div>
                                <h4>Current location</h4>
                                <code>East Park Mall</code>
                            </div>
                            
                        </div>
                        <div>
                            <span></span>
                            <div>
                                <h4>Destination</h4>
                                <code>Munali Mall</code>
                            </div>
                            
                        </div>
                    </div>
                    {/* <!-- JOB INFO ENDS --> */}


                </div>
                {/* <!-- MAP ENDS --> */}
            </div>
        </>
    )
}

export default HomePage
