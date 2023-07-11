import { useDispatch, useSelector } from "react-redux"
import { viewModel } from "../../App/Features/Quatation/QuatationSlice"
import Avatar from "../../assets/icons/user.png"
import ViewQuatation from "../../App/Features/Quatation/ViewQuatation"

const Quatations = () => {
    const disptch = useDispatch ()
    const model = useSelector ((state) => state.auatations.model)
    const handleDeleteBox1 = () => {
        const confirmationOfDeletion = confirm(`Are Your Sure You want to Delete?`)
        console.log(confirmationOfDeletion)
        if (confirmationOfDeletion) alert ("currently working on this feature")
    }
    // console.log(model);
    return (
        <>
            {
                model && <ViewQuatation />
            }
            <div className="table-page">
                <div className="table">
                    <section className="table-header">
                        <h2> Quatations</h2>
                        
                    </section>
                    <section className="table-body">
                        <table>
                            <thead>
                                <tr>
                                    <th>Sr</th>
                                    <th>Customer</th>
                                    <th>Due date</th>
                                    <th  className="td-s">status</th>
                                    <th>Outstanding Amount</th>
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
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>K 3000.00</b></td>
                                    <td>
                                        <div className="flex">
                                            <button className="button" style={{width: "max-content"}} onClick={() => disptch (viewModel (2))}>view</button>
                                            <button className="button btnd" style={{width: "max-content"}}  onClick={handleDeleteBox1}>Delete</button>
                                        </div>
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
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>K 3000.00</b></td>
                                    <td>
                                        <div className="flex">
                                            <button className="button" style={{width: "max-content"}} onClick={() => disptch (viewModel (2))}>view</button>
                                            <button className="button btnd" style={{width: "max-content"}}  onClick={handleDeleteBox1}>Delete</button>
                                        </div>
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
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>K 3000.00</b></td>
                                    <td>
                                        <div className="flex">
                                            <button className="button" style={{width: "max-content"}} onClick={() => disptch (viewModel (2))}>view</button>
                                            <button className="button btnd" style={{width: "max-content"}}  onClick={handleDeleteBox1}>Delete</button>
                                        </div>
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
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>K 3000.00</b></td>
                                    <td>
                                        <div className="flex">
                                            <button className="button" style={{width: "max-content"}} onClick={() => disptch (viewModel (2))}>view</button>
                                            <button className="button btnd" style={{width: "max-content"}}  onClick={handleDeleteBox1}>Delete</button>
                                        </div>
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
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>K 3000.00</b></td>
                                    <td>
                                        <div className="flex">
                                            <button className="button" style={{width: "max-content"}} onClick={() => disptch (viewModel (2))}>view</button>
                                            <button className="button btnd" style={{width: "max-content"}}  onClick={handleDeleteBox1}>Delete</button>
                                        </div>
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
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>K 3000.00</b></td>
                                    <td>
                                        <div className="flex">
                                            <button className="button" style={{width: "max-content"}} onClick={() => disptch (viewModel (2))}>view</button>
                                            <button className="button btnd" style={{width: "max-content"}}  onClick={handleDeleteBox1}>Delete</button>
                                        </div>
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
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>K 3000.00</b></td>
                                    <td>
                                        <div className="flex">
                                            <button className="button" style={{width: "max-content"}} onClick={() => disptch (viewModel (2))}>view</button>
                                            <button className="button btnd" style={{width: "max-content"}}  onClick={handleDeleteBox1}>Delete</button>
                                        </div>
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
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>K 3000.00</b></td>
                                    <td>
                                        <div className="flex">
                                            <button className="button" style={{width: "max-content"}} onClick={() => disptch (viewModel (2))}>view</button>
                                            <button className="button btnd" style={{width: "max-content"}}  onClick={handleDeleteBox1}>Delete</button>
                                        </div>
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
                                    <td>25 june, 2023</td>
                                    <td><p className="status warning">Pending</p></td>
                                    <td><b>K 3000.00</b></td>
                                    <td>
                                        <div className="flex">
                                            <button className="button" style={{width: "max-content"}} onClick={() => disptch (viewModel (2))}>view</button>
                                            <button className="button btnd" style={{width: "max-content"}}  onClick={handleDeleteBox1}>Delete</button>
                                        </div>
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
                                    <td>25 june, 2023</td>
                                    <td><p className="status primary">Pending</p></td>
                                    <td><b>K 3000.00</b></td>
                                    <td>
                                        <div className="flex">
                                            <button className="button" style={{width: "max-content"}} onClick={() => disptch (viewModel (2))}>view</button>
                                            <button className="button btnd" style={{width: "max-content"}}  onClick={handleDeleteBox1}>Delete</button>
                                        </div>
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
                                    <td>25 june, 2023</td>
                                    <td><p className="status danger">Pending</p></td>
                                    <td><b>K 3000.00</b></td>
                                    <td>
                                        <div className="flex">
                                            <button className="button" style={{width: "max-content"}} onClick={() => disptch (viewModel (2))}>view</button>
                                            <button className="button btnd" style={{width: "max-content"}}  onClick={handleDeleteBox1}>Delete</button>
                                        </div>
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
                                    <td>25 june, 2023</td>
                                    <td><p className="status  success">Pending</p></td>
                                    <td><b>K 3000.00</b></td>
                                    <td>
                                        <div className="flex">
                                            <button className="button" style={{width: "max-content"}} onClick={() => disptch (viewModel (2))}>view</button>
                                            <button className="button btnd" style={{width: "max-content"}}  onClick={handleDeleteBox1}>Delete</button>
                                        </div>
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
                                    <td>25 june, 2023</td>
                                    <td><p className="status success">Pending</p></td>
                                    <td><b>K 3000.00</b></td>
                                    <td>
                                        <div className="flex">
                                            <button className="button" style={{width: "max-content"}} onClick={() => disptch (viewModel (2))}>view</button>
                                            <button className="button btnd" style={{width: "max-content"}}  onClick={handleDeleteBox1}>Delete</button>
                                        </div>
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
                                    <td>25 june, 2023</td>
                                    <td><p className="status primary">Pending</p></td>
                                    <td><b>K 3000.00</b></td>
                                    <td>
                                        <div className="flex">
                                            <button className="button" style={{width: "max-content"}} onClick={() => disptch (viewModel (2))}>view</button>
                                            <button className="button btnd" style={{width: "max-content"}}  onClick={handleDeleteBox1}>Delete</button>
                                        </div>
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

export default Quatations
