import React from "react";
import Hello from "./Hello";


const Reshello = () => {
    const [show, setShow] = React.useState(true)

    function handleDelete(){
        setShow(false);
    }

    return (
        <>
         <div style={{ textAlign: 'center' }}>
            {show && <Hello/>}
            <button onClick={handleDelete}>Delete the component</button>
         </div>
         
        </>
   
)
}
export default Reshello;