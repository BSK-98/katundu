import { useDispatch } from "react-redux"
import { viewModel } from "./QuatationSlice"


const ViewQuatation = () => {
    const disptch = useDispatch ()
    const handleDeleteBox = () => {
        const confirmationOfDeletion = confirm(`Are Your Sure You want to Delete?`)
        console.log(confirmationOfDeletion)
        if (confirmationOfDeletion) alert ("currently working on this feature")
    }
    return (
        <>
            
            <div className="overlay">
                <div className="model-display">
                    <span className="closeBTN"  onClick={() => disptch (viewModel (""))}> X </span>
                    <div className="model-area">
                        <div className="page-quatation">
                            <div className="card quatation">
                                <div className="header-apit">
                                    <div className="he"></div>
                                    <div className="he-logo">
                                        <div className="img"></div>
                                        <h1>Katundu Inc.</h1>
                                    </div>
                                </div>
                                <div className="page-body">
                                    <div className="page-addresses">
                                        <div className="source-address">
                                            <h3>From: Makeni Mall</h3>
                                            <h3>Makeni Villa HQ, Along Bwenji Rd, Lusaka Lusaka, Zambia</h3>
                                            <h3>Initial Date: 20 July, 2023</h3>
                                            <h3>Due Date: 20 July, 2023</h3>
                                        </div>
                                        <div className="dest-address">
                                            <h3>To: Makeni Mall</h3>
                                            <h3>Makeni Villa HQ, Along Bwenji Rd, Lusaka Lusaka, Zambia</h3>
                                            <h3>Initial Date: 20 July, 2023</h3>
                                            <h3>Due Date: 20 July, 2023</h3>
                                        </div>
                                    </div>
                                    <div className="page-content">
                                        <div className="table-page">
                                            <div className="table">
                                                <section className="table-header">
                                                    <h2>Customer John Doe</h2>
                                                </section>
                                                <section className="table-body">
                                                    <table>
                                                        <thead>
                                                            <tr>
                                                                <th>Sr</th>
                                                                <th>Customer</th>
                                                                <th>Location</th>
                                                                <th>Order date</th>
                                                                <th  className="td-s">status</th>
                                                                <th>Distance</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    John Doe
                                                                </td>
                                                                <td>Makeni</td>
                                                                <td>25 june, 2023</td>
                                                                <td><p className="status success">Pending</p></td>
                                                                <td><b>2000KM</b></td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    John Doe
                                                                </td>
                                                                <td>Makeni</td>
                                                                <td>25 june, 2023</td>
                                                                <td><p className="status success">Pending</p></td>
                                                                <td><b>2000KM</b></td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    John Doe
                                                                </td>
                                                                <td>Makeni</td>
                                                                <td>25 june, 2023</td>
                                                                <td><p className="status success">Pending</p></td>
                                                                <td><b>2000KM</b></td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    John Doe
                                                                </td>
                                                                <td>Makeni</td>
                                                                <td>25 june, 2023</td>
                                                                <td><p className="status success">Pending</p></td>
                                                                <td><b>2000KM</b></td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    John Doe
                                                                </td>
                                                                <td>Makeni</td>
                                                                <td>25 june, 2023</td>
                                                                <td><p className="status success">Pending</p></td>
                                                                <td><b>2000KM</b></td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    John Doe
                                                                </td>
                                                                <td>Makeni</td>
                                                                <td>25 june, 2023</td>
                                                                <td><p className="status success">Pending</p></td>
                                                                <td><b>2000KM</b></td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    John Doe
                                                                </td>
                                                                <td>Makeni</td>
                                                                <td>25 june, 2023</td>
                                                                <td><p className="status success">Pending</p></td>
                                                                <td><b>2000KM</b></td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    John Doe
                                                                </td>
                                                                <td>Makeni</td>
                                                                <td>25 june, 2023</td>
                                                                <td><p className="status success">Pending</p></td>
                                                                <td><b>2000KM</b></td>
                                                            </tr>
                                                            
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    John Doe
                                                                </td>
                                                                <td>Makeni</td>
                                                                <td>25 june, 2023</td>
                                                                <td><p className="status warning">Pending</p></td>
                                                                <td><b>2000KM</b></td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    John Doe
                                                                </td>
                                                                <td>Makeni</td>
                                                                <td>25 june, 2023</td>
                                                                <td><p className="status primary">Pending</p></td>
                                                                <td><b>2000KM</b></td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    John Doe
                                                                </td>
                                                                <td>Makeni</td>
                                                                <td>25 june, 2023</td>
                                                                <td><p className="status danger">Pending</p></td>
                                                                <td><b>2000KM</b></td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    John Doe
                                                                </td>
                                                                <td>Makeni</td>
                                                                <td>25 june, 2023</td>
                                                                <td><p className="status  success">Pending</p></td>
                                                                <td><b>2000KM</b></td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    John Doe
                                                                </td>
                                                                <td>Makeni</td>
                                                                <td>25 june, 2023</td>
                                                                <td><p className="status success">Pending</p></td>
                                                                <td><b>2000KM</b></td>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    John Doe
                                                                </td>
                                                                <td>Makeni</td>
                                                                <td>25 june, 2023</td>
                                                                <td><p className="status primary">Pending</p></td>
                                                                <td><b>2000KM</b></td>
                                                            </tr>
                                                        </tbody>
                                                        <tfoot>
                                                            <tr>
                                                                <td></td>
                                                            </tr>
                                                        </tfoot>
                                                    </table>

                                                </section>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="buttons">
                                <button className="button">print</button>
                                <br />
                                <br />
                                <button className="button">Export CSV</button>
                                <br />
                                <br />
                                <button className="button">download</button>
                                <br /><br /><br /><br />
                                <hr />
                                <button className="button btn2" style={{width: "max-content"}}>Edit</button>
                                <button className="button btnd" onClick={handleDeleteBox} style={{width: "max-content"}}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewQuatation
