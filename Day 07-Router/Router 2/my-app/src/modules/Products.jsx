import { useParams } from "react-router-dom"

const Product = () => {
const {categoryId} = useParams()
   
    return (
        <>
            <h3>Id selected {categoryId} </h3>
        </>
    )
}

export default Product