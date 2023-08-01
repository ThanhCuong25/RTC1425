import React, { useEffect, useState } from "react";
import { Formik } from "formik";
const Users = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        async function getUser() {
            try {
                const user = await axios.get('');
                console.log(user);
            } catch (error) {
                console.error(error);
            }
        }
    })
    return (
        <Formik
            initialValues={{
                id: "",
                name: ""
            }}
        >
            {({ handleSubmit, handleChange, values }) => (
                <>
                <h1>Board</h1>
                <div>
                    <label htmlFor="">ID</label>
                    <input type="text" onChange={handleChange} value={values}/>
                </div>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" onChange={handleChange} value={values}/>
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>

                <table>
                    <thead>
                        
                    </thead>
                </table>
                </>
            )}
        </Formik>
    )

}

export default Users;