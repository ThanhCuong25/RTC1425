import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Users = () => {
    const [users, setUsers] = useState([])
const navigate = useNavigate()
    useEffect(() => {
        async function getUser() {
            try {
                let data = await axios.get('http://localhost:3002/api/uers')
                setUsers(data.data)
                console.log(data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [])

    const handleSubmit = (id) => {
        let conf = window.confirm("Bạn có muốn xóa không")
        if (conf) {
            axios.delete('http://localhost:3002/api/uers/' + id)
                .then(res => {
                    alert('Đã xóa một đối tượng')
                    navigate('/')
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <>
            <h1>Users</h1>
            <button type="button" ><Link to="/create">Add</Link></button>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(item => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <Link to={`/update/${item.id}`} ><button>Update</button></Link>
                                    <button onClick={()=>handleSubmit(item.id)}>Delete</button>
                                </td>
                            </tr>

                        )
                        )}
                    </tbody>
                </table>

            </div>
        </>
    );

}
export default Users