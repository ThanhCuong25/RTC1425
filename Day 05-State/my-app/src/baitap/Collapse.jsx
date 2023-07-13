import React from "react";

const Collapse = () => {
    const [show, setShow] = React.useState(false)

    const handleMoreClick = () => {
        setShow(!show);
    }
    
function content() {
    return (
        <>
        <h3>Giới thiệu</h3>
        <p>Trong React, đôi khi bạn có một số component và tùy thuộc vào từng điều kiện ví dụ như trạng thái của state props,... mà bạn muốn hiển thị</p>
        </>
    )
}
    return (
        <>
        <div className="collapse" style={{backgroundColor:'green'}}>
            <h1 style={{color:'white'}}>Conditional Rendering</h1>
        </div>
        <button onClick={handleMoreClick}>{show ? 'Đóng' : 'Xem'} giới thiệu</button>
        {show && content()}
        </>
    )
}

export default Collapse