import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState({ username: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const selector = useSelector(state => state.todoReducers)

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }


    const handleLogin = () => {
        dispatch({ type: "LOGIN_SUCCESS", payload: {user}})
        if (selector.userlogins.username === "admin" || selector.userlogins.password === "letmein") {
            navigate('/users')
        }
    }
    return (
        <form>
            <label>User name</label>
            <input name="username" onChange={handleChange} type="text" value={user.name} />

            <label>Password</label>
            <input name="password" onChange={handleChange} type="password" value={user.password} />

            <button type="button" onClick={handleLogin}> Login</button>
        </form>
    )
}
export default Login