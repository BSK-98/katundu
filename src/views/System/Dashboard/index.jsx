import AreaChart from "./AreaChart"
import PieChart from "./PieChart"
import PolarAreaChart from "./PolerAreaChart"


const Dashboard = () => {
    return (
        <div className="dashbord-page page">
            <h2>Dashboard</h2>
            <div className="cards flex">
                <div className="card flex">
                    <div className="icon"></div>
                    <div className="detail">
                        <h4>Successiful Transactions</h4>
                        <div className="div">
                            <span className="v">120</span>
                        </div>
                    </div>
                </div>
                <div className="card flex">
                    <div className="icon"></div>
                    <div className="detail">
                        <h4>K-Wellet Balance</h4>
                        <div className="div">
                            <span className="v">120</span>
                        </div>
                    </div>
                </div>
                <div className="card flex">
                    <div className="icon"></div>
                    <div className="detail">
                        <h4>Clients</h4>
                        <div className="div">
                            <span className="v">120</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-graph flex">
                <div className="card">
                    <div className="graph-title">
                        <h4>title</h4>
                    </div>
                    <div className="graph">
                        <PieChart />
                    </div>
                </div>
                <div className="card">
                    <div className="graph-title">
                        <h4>title</h4>
                    </div>
                    <div className="graph">
                        <PolarAreaChart />
                    </div>
                </div>
                <div className="card">
                    <div className="graph-title">
                        <h4>title</h4>
                    </div>
                    <div className="graph">
                        <AreaChart height={289} width={480} />
                    </div>
                </div>
            </div>
            <div className="card-graph">
                <div className="card  c-g2">
                    <div className="graph-title">
                        <h4>title</h4>
                    </div>
                    <div className="graph">
                        <AreaChart height={400} width={1450}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
