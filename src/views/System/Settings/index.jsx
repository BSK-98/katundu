import Avatar from "../../../assets/icons/user.png"

const index = () => {
    return (
        
        <div className="settings-page flex">
            <div className="user-con w-half h-full">
                <div className="hero-section">
                    <div className="img">
                        <img src={Avatar} alt="Avatar" />
                    </div>
                </div>
                <div className="main-info">
                    <div className="flex cards">
                        <div className="card flex">
                            <div className="icon"></div>
                            <div className="detail">
                                <h4>Vise</h4>
                                <div className="div">
                                    <span className="v">K230,000.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="card flex">
                            <div className="icon"></div>
                            <div className="detail">
                                <h4>K-Wallet</h4>
                                <div className="div">
                                    <span className="k-w">K230,000.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
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
                            <h2>Transaction Bars</h2>
                            <div className="card">
                                <h4>Transactions</h4>

                                <div className="progress-bar">
                                    <div className="status-bars-info">90%</div>
                                    <div style={{width: "90%"}} className="p-bar"></div>
                                </div>
                            </div>
                            <div className="card">
                                <h4>Successiful Jobs</h4>

                                <div className="progress-bar">
                                    <div className="status-bars-info">90%</div>
                                    <div style={{width: "40%"}} className="p-bar su"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div className="set w-half h-full">
                <h2>Settings</h2>

                <div className="cards">
                    <div className="card">
                        <h4>change password</h4>
                        <form>
                            <div className="inputs">
                                <input type="password" placeholder="New Password" />
                                <input type="password" placeholder="Retype Password" />
                            </div>
                            <div className="btn">
                                <button className="button">change</button>
                            </div>
                        </form>
                    </div>

                    <div className="card">
                        <h4>Add Or swip Email</h4>
                        <form>
                            <div className="inputs">
                                <input type="email" placeholder="Add Secondary Email" />
                            </div>
                            <div className="btn">
                                <button className="button">Add Email</button>
                            </div>
                        </form>
                    </div>

                    <div className="card">
                        <h4>Update Contact</h4>
                        <form>
                            <div className="inputs">
                                <input type="text" placeholder="New Cell" />
                                <input type="email" placeholder="New Email" />
                                <input type="email" placeholder="New Secondary Email" />
                            </div>
                            <div className="btn">
                                <button className="button">Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
