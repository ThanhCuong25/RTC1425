import React from "react";

const Background = () => {
    const [background, setBackground] = React.useState({
        color: "black",
    })

    function componentDidMount() {
        setTimeout(() => {
            setBackground({
                ...background,
                color: "red"
            });
        }, 2000);
    }
 
    componentDidMount()
    return (
        <>   
        <div style={{backgroundColor:background.color, 
        paddingTop: 20,
        width: 400,
        height: 80,
        margin: 'auto'}}>
        </div>
        </>
    )
}
export default Background