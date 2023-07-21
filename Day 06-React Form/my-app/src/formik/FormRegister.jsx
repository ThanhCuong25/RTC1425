import React from "react";

const FormRegister = () => {
    const [form, setform] = React.useState({
        username: "",
        email: "",
        password: "",
        cfpassword: ""
    })

    const handleChange = (e) => {
        setform({...form, 
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = () => {
        let isvalid = form.username && form.email && form.password && form.cfpassword;
       
        alert(isvalid ? "Sign in successfully": "Please fill out all the fields")
    }

    return (
        <>
            <h1>Sign up</h1>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" name="username" onChange={handleChange} value={form.username} />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="email" name="email" onChange={handleChange} value={form.email} />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" name="password" onChange={handleChange} value={form.password} />
            </div>
            <div>
                <label htmlFor="">Confirm password</label>
                <input type="password" name="cfpassword" onChange={handleChange} value={form.cfpassword} />
            </div>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default FormRegister