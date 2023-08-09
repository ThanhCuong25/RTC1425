import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Add = () => {

    const [input, setInput] = useState({ id: '', name: '' })
const navigate= useNavigate()

    const handleChange = (e) => {
        console.log(e)
        setInput({...input, 
            [e.target.name]: e.target.value
    })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3002/api/uers', input)
            .then(res => {
                alert('Submit thành công')
                navigate('/')
            }).catch(err => {
                console.error(err)
            });
    }

    return (<>
        <form onSubmit={handleSubmit}>
            <h1></h1>
            {/* <div>
                <label htmlFor="">ID</label>
                <input type="text" name="id" onChange={handleChange} />
            </div> */}
            <div>
                <label htmlFor="">Name</label>
                <input type="text" name="name" onChange={handleChange} value={input.name}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    </>
    )
}
export default Add