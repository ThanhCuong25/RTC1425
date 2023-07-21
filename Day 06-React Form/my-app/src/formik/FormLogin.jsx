import React from "react";
import { Formik } from "formik";
const FormLogin = () => {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const handleValidate = (e) => {
        const error={};
        if(!e.email){
            error.email ="Nhập thiếu email"
        } else if(!REGEX.email.test(e.email)){
            error.email ="Địa chỉ email không hợp lệ"
        }
        if(!e.password){
            error.password ="Nhập thiếu password"
        }
        return error
    }

    const handleFormSubmit = (valuesform) => {
        console.log(valuesform);
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
            {({ handleChange, handleSubmit, errors, values, }) => (
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
export default FormLogin