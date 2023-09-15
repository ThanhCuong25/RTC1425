import React from "react";
import logo from '../assets/logo.svg';
import logo1 from '../assets/logo1.png';
import { sidebarMenu } from "../ultis/menu";
import { NavLink } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import path from '../ultis/path';

const notActive = 'flex font-bold px-[25px] py-[2px] text-[#32323D] text-[13px] gap-[12px] items-center'
const activeStyle='flex font-bold px-[25px] py-[2px] text-[#356ba8] text-[13px] gap-[12px] items-center'
const SidebarLeft = () => {

    const navigate = useNavigate()
    return (
        <div className="flex h-full flex-col bg-main-200">
            <div onClick={()=> navigate(path.HOME)} className="w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center cursor-pointer ">
                <img src={logo} alt="logo" className="w-[120px] h-[40px]" />
            </div>
            <div className="flex flex-col">
                {sidebarMenu.map(item =>(
                      <NavLink
                      to={item.path}
                      key= {item.path}
                      className={({isActive})=> isActive ? activeStyle : notActive}
                      >
                        {item.icons}
                        <span>{item.text}</span>
                      </NavLink>
                      )                 
                    )}
            </div>
        </div>
    )
}
export default SidebarLeft