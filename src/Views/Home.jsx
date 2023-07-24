import Avatar from "../assets/images/avata.png"
import GoogleMapComponent from "../components/Map/MapComponent"
import CardWithList from "../components/cards/CardWithList"
const Home = () => {
    return (
        <div className="mb-5 h-[max-content]">
            <div className="flex h-[500px] gap-8 mb-4r ">
                <div className="flex items-center justify-center h-full rounded bg-gray-50 dark:bg-gray-800 w-[75%] relative shadow-lg map-con overflow-hidden">
                    <GoogleMapComponent home={true} />
                </div>
                <div className="flex items-center justify-center rounded w-[25%] h-full relative">
                    <div className="img w-[130px] h-[130px] mx-auto rounded-full overflow-hidden absolute top-[-10px] shadow-2xl">
                        <img src={Avatar} alt=" User" />
                    </div>
                    <div className="h-full w-full pt-[80px]">
                        <div className="h-full bg-gray-50 dark:bg-gray-800 p-10">
                            <div className="flex flex-col items-center justify-center p-3">
                                <h3 className="text-xl font-semibold">John Doe</h3>
                                <p>john@katundu.africa</p>
                            </div>
                            <hr />

                            <h2 className="text-left text-2xl font-semibold mt-3">Current Trip</h2>
                            <div className="grid grid-cols-2">
                                <div className="w-50 py-6 text-left">
                                    <h3 className="text-3xl text-slate-700 font-bold"> 58 <span className="font-semibold text-2xl">Km/h</span></h3>
                                    <span className="text-orange-400 mt-2">
                                        Speed
                                    </span>
                                </div>
                                <div className="w-50 py-6 text-right">
                                    <h3 className="text-3xl text-slate-700 font-bold"> 6:04 <span className="font-semibold text-2xl">M</span></h3>
                                    <span className="text-orange-400 mt-2">
                                        Run Time
                                    </span>
                                </div>
                                <div className="w-50 py-6 text-left">
                                    <h3 className="text-3xl text-slate-700 font-bold"> 5 <span className="font-semibold text-2xl">Km</span></h3>
                                    <span className="text-orange-400 mt-2">
                                        Traveled
                                    </span>
                                </div>
                                <div className="w-50 py-6 text-right">
                                    <h3 className="text-3xl text-slate-700 font-bold"> 8 <span className="font-semibold text-2xl">Km</span></h3>
                                    <span className="text-orange-400 mt-2">
                                        To Destination
                                    </span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8 mb-4 h-[300px] mt-2">
                <div className="flex items-center justify-center rounded">
                    <CardWithList title="Last Trips" listType="trip" />
                </div>
                <div className="flex items-center justify-center rounded">
                    <CardWithList title="Last Expenses" listType="expense" />
                </div>
                
            </div>
        </div>
    )
}

export default Home
