import React from "react";
import "./Hero.css";
//import arrow_icon from '../Assests/arrow.png';
import hero_image from '../Assests/hero.png'
const Hero = () => {
    return (
        <div className="hero">
            <div className="Hero-left">
                <h2>Start your day with a steaming cup of coffee</h2>
                <p>Boost your productivity and build your mood with a glass of coffee in the morning</p>
                
          
               
            </div>

            <div className="hero-right">
                <img src={hero_image} alt="" />
                
             <div className="hero-14k">
                <h2 className="font-semibold">
                    14K
                </h2>
                <div className="hero-cappuccico ">
                <h2>Cappuccino</h2>
             </div>
             </div>
            </div>
        </div>
    )
}

export default Hero