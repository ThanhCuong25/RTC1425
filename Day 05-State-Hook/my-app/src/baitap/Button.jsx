import React from "react";

const Button = () => {
 const [number, setNumber]= React.useState(0)
 
 let prve = number >0
 function handleDecrease() {
    if(prve){
        setNumber(number-1)
    }
 }

 function handleIncrease() {
    setNumber(number+1);
 }

 function handleReset() {
    setNumber(0);
 }

 return (
    <>
    <button onClick={handleDecrease}>Decrease</button>
    <p>{number}</p>
    <button onClick={handleIncrease}>Increase</button>
    <button onClick={handleReset}>Reset</button>
    </>
 )
};

export default Button;