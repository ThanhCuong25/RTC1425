import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
const GetUser = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.todoReducers)
    useEffect(() => {
        //dispatch({ type: 'FETCH_TODO_REQUEST' })
    }, [])

    const handleGetUsers = () => {
        dispatch({ type: 'FETCH_TODO_REQUEST' })
    }
    const handleDelete = (id) => {
        axios.delete('http://localhost:3004/api/users/' + id).then(res=>{
            dispatch({ type: 'DELETE_TODO',payload: id })
            alert('Đã xóa một đối tượng')
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <h1>
                User List
            </h1>
            <button type='button' onClick={handleGetUsers}>Get users</button>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {selector.todos.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button onClick={() => handleDelete(user.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default GetUser


