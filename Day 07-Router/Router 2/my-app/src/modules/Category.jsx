import React from "react";
import { useNavigate } from "react-router-dom";
const Category = () => {
    let navigate = useNavigate()
    const sendDataToProduct = (e) => {
        navigate(`/products/${e.target.value}`);
    }
    return (
        <>
            <h1>Select a Category</h1>
            <select defaultValue="default" onChange={sendDataToProduct}>
                <option value="default" disabled hidden>
                    Choose your car
                </option>
                <option value="1">Honda</option>
                <option value="2">Suzuki</option>
                <option value="3">Yamaha</option>
            </select>
        </>
    )
}
export default Category