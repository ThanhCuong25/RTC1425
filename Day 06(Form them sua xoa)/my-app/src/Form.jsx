import React from "react";

const Form = () => {
    const [students, setStudents] = React.useState([])
    const [form, setForm] = React.useState({
        name: "",
        phone: "",
        email: ""
    })

    const [updating, setUpdating] = React.useState(-1)

    const resetForm = () => {
        setForm({
            name: "",
            phone: "",
            email: ""
        })
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {
        const currentStudent = [...students]
        currentStudent.push(form)
        setStudents(currentStudent)
        resetForm();
    }

    const handleEdit = (editedStudent) => {
        const editedStudentIndex = students.findIndex(student => student.name === editedStudent.name &&
            student.phone === editedStudent.phone &&
            student.email === editedStudent.email
        )
        setForm({
            name: editedStudent.name,
            phone: editedStudent.phone,
            email: editedStudent.email
        })
        setUpdating(editedStudentIndex)
    }

    const handleUdate = () => {
        const updateStudents = [...students]
        updateStudents[updating] = form
        setStudents(updateStudents)
        setUpdating(-1)
        resetForm()
    }
    const handleDelete = (deleteStudent) => {
        const deleteStudentIndex = students.findIndex(student => student.name === deleteStudent.name &&
            student.phone === deleteStudent.phone &&
            student.email === deleteStudent.email
        )
        students.splice(deleteStudentIndex,1)
        setStudents([...students])
    }

    return (
        <>
            <h1>Studen List</h1>
            <div>
                <label htmlFor="">Name: </label>
                <input type="text" name="name" onChange={handleChange} value={form.name} />
            </div>
            <div>
                <label htmlFor="">Phone: </label>
                <input type="number" name="phone" onChange={handleChange} value={form.phone} />
            </div>
            <div>
                <label htmlFor="">Email: </label>
                <input type="email" name="email" onChange={handleChange} value={form.email} />
            </div>
            {updating >= 0 ? <button type="submit" onClick={handleUdate}>Update</button> : <button type="submit" onClick={handleSubmit}>Submit</button>}


            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Phone</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.email}>
                            <td>{student.name}</td>
                            <td>{student.phone}</td>
                            <td>{student.email}</td>
                            <td>
                                <button onClick={() => handleEdit(student)}>Edit</button>
                                <button onClick={() => handleDelete(student)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
export default Form