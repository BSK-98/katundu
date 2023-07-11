import Yup from 'yup'
const LoginSchema = Yup.object().shape({
    email: Yup.string()
 
        // Format Validation
        .email("Invalid email address format")
 
        // Required Field Validation
        .required("Email is required"),
    password: Yup.string()
 
        //Minimum Character Validation
        .min(3, "Password must be 3 characters at minimum")
        .required("Password is required")
});

export default LoginSchema