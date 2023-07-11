import { useDispatch, useSelector } from "react-redux"
import ViewOrder from "../../../App/Features/Orders/ViewOrder"
import Avatar from "../../../assets/icons/user.png"
import { modelActivate } from "../../../App/Features/Orders/modelSlice"

const Orders = () => {
    const disptch = useDispatch ()
    const model = useSelector ((state) => state.model.viewModel)
    return (
        <>
            { model && <ViewOrder /> }
            <div className="table-page">
                <div className="table">
                    <section className="table-header">
                        <h2>Customer orders</h2>
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
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="info">
                                            <div className="img">
                                                <img src={Avatar} alt="Avatar" />
                                            </div>
                                            <h4> John Doe</h4>
                                        </div>
                                    </td>
                                    <td>Makeni</td>
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>2000KM</b></td>
                                    <td>
                                        <button className="button btn2" onClick={() => disptch (modelActivate ())}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="info">
                                            <div className="img">
                                                <img src={Avatar} alt="Avatar" />
                                            </div>
                                            <h4> John Doe</h4>
                                        </div>
                                    </td>
                                    <td>Makeni</td>
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>2000KM</b></td>
                                    <td>
                                        <button className="button btn2" onClick={() => disptch (modelActivate ())}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="info">
                                            <div className="img">
                                                <img src={Avatar} alt="Avatar" />
                                            </div>
                                            <h4> John Doe</h4>
                                        </div>
                                    </td>
                                    <td>Makeni</td>
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>2000KM</b></td>
                                    <td>
                                        <button className="button btn2" onClick={() => disptch (modelActivate ())}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="info">
                                            <div className="img">
                                                <img src={Avatar} alt="Avatar" />
                                            </div>
                                            <h4> John Doe</h4>
                                        </div>
                                    </td>
                                    <td>Makeni</td>
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>2000KM</b></td>
                                    <td>
                                        <button className="button btn2" onClick={() => disptch (modelActivate ())}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="info">
                                            <div className="img">
                                                <img src={Avatar} alt="Avatar" />
                                            </div>
                                            <h4> John Doe</h4>
                                        </div>
                                    </td>
                                    <td>Makeni</td>
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>2000KM</b></td>
                                    <td>
                                        <button className="button btn2" onClick={() => disptch (modelActivate ())}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="info">
                                            <div className="img">
                                                <img src={Avatar} alt="Avatar" />
                                            </div>
                                            <h4> John Doe</h4>
                                        </div>
                                    </td>
                                    <td>Makeni</td>
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>2000KM</b></td>
                                    <td>
                                        <button className="button btn2" onClick={() => disptch (modelActivate ())}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="info">
                                            <div className="img">
                                                <img src={Avatar} alt="Avatar" />
                                            </div>
                                            <h4> John Doe</h4>
                                        </div>
                                    </td>
                                    <td>Makeni</td>
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>2000KM</b></td>
                                    <td>
                                        <button className="button btn2" onClick={() => disptch (modelActivate ())}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="info">
                                            <div className="img">
                                                <img src={Avatar} alt="Avatar" />
                                            </div>
                                            <h4> John Doe</h4>
                                        </div>
                                    </td>
                                    <td>Makeni</td>
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>2000KM</b></td>
                                    <td>
                                        <button className="button btn2" onClick={() => disptch (modelActivate ())}>View</button>
                                    </td>
                                </tr>
                                
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="info">
                                            <div className="img">
                                                <img src={Avatar} alt="Avatar" />
                                            </div>
                                            <h4> John Doe</h4>
                                        </div>
                                    </td>
                                    <td>Makeni</td>
                                    <td>25 june, 2023</td>
                                    <td><p className="status warning">Pending</p></td>
                                    <td><b>2000KM</b></td>
                                    <td>
                                        <button className="button btn2" onClick={() => disptch (modelActivate ())}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="info">
                                            <div className="img">
                                                <img src={Avatar} alt="Avatar" />
                                            </div>
                                            <h4> John Doe</h4>
                                        </div>
                                    </td>
                                    <td>Makeni</td>
                                    <td>25 june, 2023</td>
                                    <td><p className="status primary">Pending</p></td>
                                    <td><b>2000KM</b></td>
                                    <td>
                                        <button className="button btn2" onClick={() => disptch (modelActivate ())}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="info">
                                            <div className="img">
                                                <img src={Avatar} alt="Avatar" />
                                            </div>
                                            <h4> John Doe</h4>
                                        </div>
                                    </td>
                                    <td>Makeni</td>
                                    <td>25 june, 2023</td>
                                    <td><p className="status danger">Pending</p></td>
                                    <td><b>2000KM</b></td>
                                    <td>
                                        <button className="button btn2" onClick={() => disptch (modelActivate ())}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="info">
                                            <div className="img">
                                                <img src={Avatar} alt="Avatar" />
                                            </div>
                                            <h4> John Doe</h4>
                                        </div>
                                    </td>
                                    <td>Makeni</td>
                                    <td>25 june, 2023</td>
                                    <td><p className="status  success">Pending</p></td>
                                    <td><b>2000KM</b></td>
                                    <td>
                                        <button className="button btn2" onClick={() => disptch (modelActivate ())}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="info">
                                            <div className="img">
                                                <img src={Avatar} alt="Avatar" />
                                            </div>
                                            <h4> John Doe</h4>
                                        </div>
                                    </td>
                                    <td>Makeni</td>
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>2000KM</b></td>
                                    <td>
                                        <button className="button btn2" onClick={() => disptch (modelActivate ())}>View</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <div className="info">
                                            <div className="img">
                                                <img src={Avatar} alt="Avatar" />
                                            </div>
                                            <h4> John Doe</h4>
                                        </div>
                                    </td>
                                    <td>Makeni</td>
                                    <td>25 june, 2023</td>
                                    <td><p className="status primary">Pending</p></td>
                                    <td><b>2000KM</b></td>
                                    <td>
                                        <button className="button btn2" onClick={() => disptch (modelActivate ())}>View</button>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td><h1>footer</h1></td>
                                </tr>
                            </tfoot>
                        </table>

                    </section>
                </div>
            </div>
        </>
    )
}

export default Orders
