import React from "react";

const Calculator = () => {
    const [form, setForm] = React.useState({
        num1: '',
        num2: ''
    })

    const handleNum = (e) => {
        setForm({
            ...form,
            num1: e.target.value,
            num2: e.target.value
        })
    }


    return (
        <>
            <div style={{ border: '1px solid black' }}>
                <input type="text" onChange={(e) => handleNum(e)} value={form.num1 } /><br/>
                <input type="text" onChange={(e) => handleNum(e)} value={ form.num2} />
                <p>Result:</p>
                <button>+</button>
                <button>-</button>
                <button>*</button>
                <button>/</button>
            </div>
        </>
    )
}
export default Calculator