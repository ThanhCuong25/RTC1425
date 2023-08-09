import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Ex1 = () => {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.todoReducers)

    useEffect(() => {
        dispatch({ type: 'FETCH_TODO_REQUEST' })
    }, [])

    return (
        <>
           <h1>TodoList</h1>
           <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {selector.todos.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </>
    )
}
export default Ex1