
import axios from "axios"
const UserList = (props) => {
    return (
        <>
            <p>User lists</p>
            <ul>
                {props.users.map(user =>
                    <li key={user.id}>{user.name}</li>
                )}
            </ul>
        </>
    )
}

// SSG : Lấy dữ liệu tĩnh, ít thay đổi
export async function getStaticProps() {
    const res = await axios.get('http://localhost:3001/users')
    const users = res.data
    return {
        props: {
            users
        },
        revalidate: 3600 //ISR
    }

}

//SSR: Lấy dữ liệu có nhiều thay đổi 
// export async function getServerSideProps() {
//     const res = await axios.get('http://localhost:3001/users')
//     const users = res.data
//     return {
//         props: {
//             users
//         },
//         revalidate: 3600 //ISR
//     }

// } 
export default UserList