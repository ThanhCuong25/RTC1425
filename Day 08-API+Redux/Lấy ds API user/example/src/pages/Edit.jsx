import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
    let { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3002/api/uers/' + id)
            .then(res => { setData(res.data) })
            .catch(err => { console.log(err) })
    }, [])

    const handleChange = (e) => {
        setData({
            ...data,
            name: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3002/api/uers/' +id, data)
        .then(res => {
            alert('Updated thành công')
            navigate('/')
         }).catch(err => { console.log(err) })
        // axios.put('http://localhost:3002/api/uers/'+id, data)
        //     .then(
        //         alert('Update thành công')
        //         navigate('/')
        //     )
        //     .catch(err => { console.log(err) })
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1></h1>
            <div>
                <label htmlFor="">ID</label>
                <input type="text" disabled name="id"  value={data.id} />
            </div>
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name="name" onChange={handleChange} value={data.name} />
            </div>
            <button type="submit">Update</button>
        </form>
    )
}
export default Edit