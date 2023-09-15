import React from "react";
import icons from "../ultis/icons";
import Search from "./Search";
import { useNavigate, useParams } from "react-router-dom";

const {AiOutlineArrowLeft,AiOutlineArrowRight} = icons
const Header = () => {
    const navigate = useNavigate()
    const {singer} = useParams()
    return (
        <div className="w-full  flex justify-between items-center">
            <div className="flex w-full items-center gap-6">
                <div className='flex gap-6 cursor-pointer'>
                    <span onClick={()=> navigate(-1)}><AiOutlineArrowLeft size={22} color={singer ? 'gray' : 'black'}/></span>
                    <span onClick={()=> navigate(1)}><AiOutlineArrowRight size={22} color={singer ? 'gray' : 'black'}/></span>
                </div>
                <div className="w-1/2">
                   <Search/>
                </div>
            </div>
            <div >
                Login
            </div>
        </div>
    )
}
export default Header