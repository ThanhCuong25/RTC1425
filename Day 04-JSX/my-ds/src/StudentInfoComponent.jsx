import './StudentInfoComponent.css'
const students = [
    {
        id: 1,
        name: 'Nguyễn Thành Nam',
        age: 20,
        address: 'Hà Nội'
    },

    {
        id: 2,
        name: 'Vũ Như Thành ',
        age: 18,
        address: 'Thái Nguyên'
    },

    {
        id: 3,
        name: 'Trần Ngọc Lan',
        age: 19,
        address: 'Hà Nội'
    },

    {
        id: 4,
        name: 'Phạm Quỳnh Như',
        age: 20,
        address: 'Phú Thọ'
    }
]
 const StudentInfoComponent=()=>{
    return (
        <>
        <table>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Address</th>
            </tr>
            {students.map(student =>(
                <tr>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.age}</td>
                    <td>{student.address}</td>
                </tr>
            ))}
        </table>
        </>
    )
 }
 export default StudentInfoComponent