import { Formik } from "formik";
import React from "react";
import ValidateContact from "./ValidateContact";

const ContactForm = () => {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

   const handleFormSubmit = (formvalues) => {
        alert("Add contact successfully!!!");
    }
    return (
        <Formik
            initialValues={{
                name: "",
                email: "",
                phone: "",
                message: ""
            }}
            validationSchema={ValidateContact}
            onSubmit={handleFormSubmit}
        >
            {({ handleSubmit, handleChange, values, errors }) => (
                <>
                    <h1>ContactForm</h1>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" name="name" onChange={handleChange} value={values.name} />
                        {errors.name && <p>{errors.name}</p>}
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" onChange={handleChange} value={values.email} />
                        {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div>
                        <label htmlFor="">Phone</label>
                        <input type="number" name="phone" onChange={handleChange} value={values.phone} />
                        {errors.phone && <p>{errors.phone}</p>}
                    </div>
                    <div>
                        <label htmlFor="">Messager</label><br/>
                        <textarea name="message" id="" cols="30" rows="10" onChange={handleChange} value={values.message}></textarea>
                        {/* {errors.phone && <p>{errors.phone}</p>} */}
                    </div>
                    <button type="submit" onClick={handleSubmit}>Submit</button>
                </>
            )}

        </Formik>
    )
}
export default ContactForm