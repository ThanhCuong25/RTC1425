import React from "react";
import { Formik } from "formik";

const REGEX = {
    to: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};
const MailForm = () => {
    const [file, setFile] = React.useState(null)

    const handleValidate = (e) => {
        const error = {};
        if (!e.to) {
            error.to = "Nhập thiếu email"
        } else if (!REGEX.to.test(e.to)) {
            error.to = "Địa chỉ email không hợp lệ"
        }
        if (!e.title) {
            error.title = "Nhập thiếu title"
        }
        if (!e.message) {
            error.message = "Nhập thiếu message"
        }
        // if(!e.file){
        //     error.file = "Thiếu file"
        // }
        return error
    }

    const handleFormSubmit = (valuesform, formik) => {
        alert(valuesform ? "Sign in successfully" : "Please fill out all the fields")
        formik.resetForm()
    }
    return (
        <Formik
            initialValues={{
                to: "",
                title: "",
                message: ""
            }}

            validateOnBlur={false}
            validate={handleValidate}
            onSubmit={handleFormSubmit}
        >
            {({ handleChange, handleSubmit, errors, values, }) => (
                <>
                    <h1>Login</h1>
                    <div>
                        <label htmlFor="">To</label>
                        <input type="text" name="to" onChange={handleChange} value={values.to} />
                        {errors.to && <p>{errors.to}</p>}
                    </div>
                    <div>
                        <label htmlFor="">Title</label>
                        <input type="text" name="title" onChange={handleChange} value={values.title} />
                        {errors.title && <p>{errors.title}</p>}
                    </div>
                    <div>
                        <label htmlFor="">Message</label><br />
                        <textarea name="message" cols="30" rows="10" onChange={handleChange} value={values.message}></textarea>
                        {errors.message && <p>{errors.message}</p>}
                    </div>
                    <div>
                        <input type="file" name="file" onChange={(e) => setFile(e.currentTarget.files[0])} />
                        {/* {errors.file && <p>{errors.file}</p>} */}
                    </div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </>
            )}
        </Formik>
    )
}
export default MailForm