import { useEffect, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

const TodoList = () => {
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const dispatch = useDispatch()

    const selector = useSelector(state => state.todoReducers)

    useEffect(() => {
        async function getTodos() {
            try {
                let data = await axios.get('http://localhost:3001/api/todos')
                setTodoList(data.data)
                console.log(data.data)
            } catch (error) {
                console.log(error)
            }
        }
        getTodos()
    }, [])

    const handleChangle = (e) => {
        setTodo(e.target.value)
    }

    const handleAdd = () => {
        axios.post(' http://localhost:3001/api/todos', {
            name: todo
        }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => dispatch({ type: "ADD_TODO", payload: res.data }))
    }

    const handleDelete = (id) => {
        
            axios.delete('http://localhost:3001/api/todos/' + id)
                .then(res => {
                    dispatch({type: "DELETE_TODO", payload: id})
                    alert('Đã xóa một đối tượng')
                    console.log(res.data)

                })
                .catch(err => console.log(err))
    }
    return (
        <>
            <h1>TodoList</h1>
            <input type="text" name="name" onChange={handleChangle} />
            <button type="submit" onClick={handleAdd} >Add</button>

            <ul>
                {todoList.map(item => {
                    return (
                        <li >{item.id}:{item.name} </li>
                    )
                })}

                {selector.todos.map(todo => {
                    return (
                        <li key={todo.id}>{todo.name}  <button onClick={()=>handleDelete(todo.id)}>Delete</button></li>
                    )
                })}
            </ul>
        </>
    )
}
export default TodoList