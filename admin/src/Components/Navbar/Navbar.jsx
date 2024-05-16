import React from "react";
import './Navbar.css';
import navlogo from '../../assets/logo.png'
import navprofile from '../../assets/nav-profile.svg'  
const Navbar = () => {
    return (
        <div className="Navbar">
            <img src={navlogo} alt="" className="nav-logo" />
            <img src={navprofile} alt="" className="nav-profile" />
        </div>
    )
}
export default Navbar