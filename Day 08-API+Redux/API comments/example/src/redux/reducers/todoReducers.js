const initialState = {
    todos: []
}
const todoReducers = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const newTodos = state.todos.concat(action.payload)
            return {
                todos: newTodos
            };

        case "DELETE_TODO":
            return {
                todos: state.todos.filter(item=> item.id !== action.payload)
            };
        default:
            return state
    }
}
export default todoReducers