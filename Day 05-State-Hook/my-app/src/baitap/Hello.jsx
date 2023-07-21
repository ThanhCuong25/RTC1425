import React from "react";
const Hello = () => {
  function  componentWillUnmount() {
        alert('The component is going to be unmounted');
      }
 
    return (
<h1>Hello you </h1>
    )
}
export default Hello;