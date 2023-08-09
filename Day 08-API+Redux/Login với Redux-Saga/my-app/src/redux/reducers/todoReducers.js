const initialState = {
    todos: [],
    userlogins: {}
}

const todoReducers = (state=initialState, action)=>{
    switch(action.type){
        case "FETCH_TODO_SUCCESS":
            return {
                todos: action.payload
            }
            case "LOGIN_SUCCESS":
                return {
                    userlogins: action.payload
                }
            default: 
            return state
    }
}
export default todoReducers
