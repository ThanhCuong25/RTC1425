const { useRouter } = require("next/router")

const UserProfile = () => {
    const router = useRouter()
    return (
        <>
            <p>User profile: {router.query.profile}</p>
        </>
    )
}
export default UserProfile