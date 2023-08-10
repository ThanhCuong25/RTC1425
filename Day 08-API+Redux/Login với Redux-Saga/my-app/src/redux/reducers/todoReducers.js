const initialState = {
    todos: [],
}

const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_TODO_SUCCESS":
            return {
                todos: action.payload
            }
        case "DELETE_TODO":
            return {
                todos: state.todos.filter(item=> item.id !== action.payload)
            }
        default:
            return state
    }
}
export default todoReducers
