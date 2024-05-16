import React, { useContext, useState } from "react";
import './Navbar.css';
import logo from '../Assests/logo.png'
import cart_icon from '../Assests/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import dropdown_icon from "../Assests/nav-dropdown_icon.png"
import { useRef } from "react";
const Navbar = () => {

    const [menu, setmenu] = useState("shop");
    const { getTotalCartitems } = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current?.classList.toggle('nav-menu-visible')
        e.target?.classList.toggle('open');
    };
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Teen's Cafe</p>
            </div>
            <img className="nav-dropdown" onClick={dropdown_toggle} src={dropdown_icon} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => { setmenu("Menu") }}> <Link style={{ textDecoration: 'none', color: '#171717' }} to='/'>Home</Link> {menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("Coffee") }}> <Link style={{ textDecoration: 'none', color: '#171717' }} to='/Coffee'>Coffee</Link>  {menu === "Coffee" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("Snacks") }}> <Link style={{ textDecoration: 'none', color: '#171717' }} to='/Snacks'>Snacks</Link>  {menu === "Snacks" ? <hr /> : <></>}</li>
                <li onClick={() => { setmenu("menu") }}><Link style={{ textDecoration: 'none', color: '#171717' }} to='/menu'>Menu</Link>  {menu === "Dessert" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                    ? <button onClick={() => { localStorage.removeItem('auth-token'); window.location.replace('/') }}> Logout</button>
                    : <Link to='/login'>  <button>Login</button></Link>}

                <Link to='/Cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartitems()}</div>
            </div>
        </div>
    )
}
export default Navbar;