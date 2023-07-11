import { useDispatch, useSelector } from "react-redux"
import { activateModel } from "../../App/Features/Orders/modelSlice"

import axios from "axios"

import { Field, Form, Formik } from "formik"
import { useState } from "react"

const BookingForm = () => {
    const [img, setImg] = useState ([])
    const [imgInput, setImgInput] = useState (null)
    const dispatch = useDispatch ()
    const booking = useSelector ((state) => state.model.bookingType)
    // const accessToken = useSelector ((state) => state.auth.token)
    const accessToken = localStorage.getItem ("token")

    console.log(accessToken);
    
    
    const handleSubmit = (formData) =>{
        const destinationAddress = {
            name: formData.d_name,
            phone_number: formData.d_phone_number,
            address: "",
            lat: -15.387526,
            lgn: 28.322816,
            email: [formData.d_email]
        }
        const sourceAddress = {
            name: formData.name,
            phone_number: formData.phone_number,
            address: "",
            lat: -15.387526,
            lgn: 28.322816,
            email: [formData.email]
        }

        let images = []

        for (const img of imgInput) {
            let reader = new FileReader ()
            reader.readAsDataURL (img)
            reader.onload = () => {
                // console.log(reader.result);
                setImg(reader.result)
                // images.push (f_img)
            }
        }
        console.log(img);

        
        const PostData = {
            source_address: JSON.stringify (sourceAddress),
            destination_address: JSON.stringify (destinationAddress),
            truck_type_id: document.getElementById ("truck_type_id").value,
            good_type_id: document.getElementById ("good_type_id").value,
            weight: parseInt (document.getElementById ("weight").value),
            items: formData.items,
            images: images
        }

        axios ({
            url: "https://api.katundu.africa/api/v1/orders/create",
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "*/*",
                "Authorization": "Bearer " + accessToken
            },

            data: PostData, 

        }).then((res) => { 
            console.log('====================================')
            console.log(res)
            console.log('====================================')

        }).catch((err) => {
            console.log(err)
        });
    }
    return (
        <div className="overlay-full z99">
            <div className="model-display">
                <span className="closeBTN"  onClick={() => dispatch (activateModel (""))}> X </span>
                <div className="model-area">
                    <Formik
                        initialValues={{ 
                            email: "", 
                            name: "", 
                            phone_number: "", 
                            d_email: "", 
                            d_name: "", 
                            d_phone_number: "", 
                            truck_type_id: "", 
                            good_type_id: "", 
                            items: "",
                            weight: 0

                        }}
                        // validationSchema={LoginSchema}
                        onSubmit={(values) => {
                            handleSubmit (values)
                            }}
                    >
                        {(props) => (
                            <>
                                <Form encType="multipart/form-data">
                                    <h2>{booking}</h2>
                                    <div className="form">
                                        <div className=" flex ">
                                            <div className="inputs">
                                                <h3>Sender Info</h3>
                                                <Field type="text" name="name"  placeholder="Full Name" />
                                                {/* <div className="h-ip">
                                                    <select id="phone-code">
                                                        <option value="+260">+260</option>
                                                        <option value="+11">+11</option>
                                                    </select>
                                                    <div className="w-90">
                                                        <Field type="text" name="phone_number" />
                                                    </div>
                                                </div> */}
                                                <Field type="text" name="phone_number" placeholder="Phone Number" />
                                                <Field type="email" name="email" placeholder="Email" />
                                            </div>
                                            <div className="inputs">
                                                <h3>Recievers Info</h3>
                                                <Field type="text" name="d_name"  placeholder="Full Name" />
                                                {/* <div className="h-ip">
                                                    <select id="phone-code">
                                                        <option value="+260">+260</option>
                                                        <option value="+11">+11</option>
                                                    </select>
                                                    <div className="w-90">
                                                        <Field type="text" name="phone_number" />
                                                    </div>
                                                </div> */}
                                                <Field type="text" name="d_phone_number" placeholder="Phone Number" />
                                                <Field type="email" name="d_email" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="select">
                                            <br />
                                            <br />
                                            <h3>Shippment Info</h3>
                                            <select id="truck_type_id">
                                                <option value="____">Select Truck </option>
                                                <option value="truck">Truck</option>
                                                <option value="truck">Truck</option>
                                                <option value="truck">Truck</option>
                                            </select>
                                            <div className="h-ip">
                                                <select id="good_type_id">
                                                    <option value="____">Select Good</option>
                                                    <option value="good">Good</option>
                                                    <option value="good">Good</option>
                                                    <option value="good">Good</option>
                                                </select>
                                                <div className="inputs" style={{margin: "0 10px"}}>
                                                    <input type="number" id="weight" placeholder="Enter Your Weight" />
                                                </div>
                                            </div>
                                            <div className="inputs">
                                                <Field type="text" name="items" placeholder="Type in Items" />
                                            </div>
                                            <div className="images">
                                                <label htmlFor="images">Add Images</label>
                                                <input onChange={(e) => setImgInput (e.target.files)} style={{display: "none"}} id="images" type="file" accept="*" multiple />
                                                <div className="img-shows">
                                                    {/* {img == [] || img == null ? "" : img.map((img, i) => <img key={i} src={img} />)} */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="form flex">
                                        
                                        <div className="map"></div>
                                    </div> */}
                                    <div style={{justifyContent: "flex-start"}} className="flex">
                                        <div className="btn" style={{width: "max-content"}}>
                                            <button type="button" className="button">next</button>
                                        </div>

                                        <div className="btn">
                                            <button type="submit" className="button">Create Order</button>
                                        </div>
                                    </div>
                                    
                                </Form>
                            </>
                        )}
                        
                        
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default BookingForm
