import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import routes from "../routes";

const Login = () => {
let navigate = useNavigate();
    const handleValidate = (e) => {
        const error = {}
        if (e.email !== "admin@gmail.com") {
            error.email = "Nhập sai email"
        }
        if (e.password !== "letmein") {
            error.password = "Nhập sai password"
        }
        return error
    }

    const handleFormSubmit = (value) => {
        if (value.name === "admin@gmail.com" || value.password === "letmein") {
           navigate(routes.web.authentication.access)
        } 

    }
    return (
        <Formik
            initialValues={{
                email: "",
                password: ""
            }}
            validateOnBlur={false}
            validate={handleValidate}
            onSubmit={handleFormSubmit}
        >
            {({ handleChange, values, errors, handleSubmit }) => (
                <>
                    <h1>Login</h1>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" onChange={handleChange} value={values.email} />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" onChange={handleChange} value={values.password} />
                        {errors.password && <p>{errors.password}</p>}
                    </div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </>
            )}
        </Formik>
    )
}
export default Login