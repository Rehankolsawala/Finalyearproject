import React from "react"
import './Footer.css'
import Footer_logo from '../Assests/logo.png'
import instragarm_icon from '../Assests/instagram_icon.png'
import pintester_icon from '../Assests/pintester_icon.png'
import whatsapp from '../Assests/whatsapp_icon.png'

const footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={Footer_logo} alt="" />
                <p>Teen's Cafe</p>
            </div>
            <div>
                <ul className="footer-link">
                    <li>Company</li>
                    <li>Product</li>
                    <li>Branch</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                <div className="footer-social-icon">
                    <div className="footer-icon-container">
                        <img src={instragarm_icon} alt="" />
                    </div>
                    <div className="footer-icon-container">
                        <img src={pintester_icon} alt="" />
                    </div>
                    <div className="footer-icon-container">
                        <img src={whatsapp} alt="" />
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @2024 - All Right Resvered. </p>
            </div>
        </div>
    )
};
export default footer