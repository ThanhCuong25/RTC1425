import React from "react";
import { Link, Outlet } from "react-router-dom";

const Header = () =>{
return (
    <>
      <ul>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
    </ul>
    <Outlet/>
    </>
)
}
export default Header