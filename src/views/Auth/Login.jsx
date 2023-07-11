import { Field, Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../App/Features/AuthSlice/AuthSlice"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
// import yup from 'yup'
// import { LoginSchema } from "../../Schemas"

// const LoginSchema = yup.object().shape({
//     email: yup.string()
 
//         // Format Validation
//         .email("Invalid email address format")
 
//         // Required Field Validation
//         .required("Email is required"),
//     password: yup.string()
 
//         //Minimum Character Validation
//         .min(3, "Password must be 3 characters at minimum")
//         .required("Password is required")
// });


const Login = () => {
    const [loading, setLoading] = useState (false)
    const disptch = useDispatch ()
    const loggedinUser = useSelector ((state) => state.auth)

    const navigate = useNavigate ()

    const handleSubmit = (data) => {
        setLoading(true)

        if (data) {
            axios ({
                url: "https://api.katundu.africa/api/v1/auth/login",
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*"
                },

                data: data, 

            }).then((res) => { 
                const user = res.data 

                const userData = {
                    user: {
                        name: user.name,
                        phone: user.phone_number,
                        email: user.email,
                        id: user.id,
                    },
                    access_token: user.access_token,
                    user_role: user.role
                }

                disptch(login (userData))
                setLoading (false)
                navigate ("/app")
            }).catch((err) => {
                console.log(err)
                setLoading (false)
            });
        }
    }
    console.log('====================================')
    console.log(loggedinUser)
    console.log('====================================')

    return (
        <div>
            <h1>Login</h1>
            <Formik 
                initialValues={{ email: "johndoe@katundu.africa", password: "Password123" }}
                // validationSchema={LoginSchema}
                onSubmit={(values) => {
                    handleSubmit (values)
                  }}
                >
                {(props) => (
                    <div>
                        <div className="row mb-5">
                            <div className="col-lg-12 text-center">
                                <h1 className="mt-5">Login Form</h1>
                            </div>
                        </div>
                        <Form>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    autoComplete="off"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password" className="mt-3">
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="button btn2"
                            >
                                { loading ? "Loading....." : "Submit"}
                            </button>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}

export default Login
