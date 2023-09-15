const { useRouter } = require("next/router")

const UserClass = () => {
  const router=  useRouter()
 const {profile,classes}= router.query
    return (
        <>
        <p>Class of user: {profile} and class {classes}</p>
        <button onClick={() => router.push('/users')}>Users</button>
        </>
    )
}
export default UserClass