import Link from "next/link"

const Navbar = () => {
    return (
        <ul>
           <Link href="/users">Users</Link>
           {/* <Link href={{
            pathname:"/users/[profile]",
            query: {profile: 1}
           }}>User Profile</Link> */}
        </ul>
    )
}
export default Navbar