import React from "react";
import img from '../Assests/about.jpg'
import "./About.css";

const About = () => {
    return (
        <div className="container-About">
            <h1 className="title-About">About Us</h1>

            <div className="content-About">
                <div className="image-container-About">
                    <img className="image-About" src={img} alt="img" />
                </div>
                <div className="text-container-About">
                    <h2 className="subtitle-About">
                        What Makes Our Coffee Special?
                    </h2>
                    <p className="paragraph-About">
                        It's not just about the beans; it's about the journey from farm to cup. We source only the finest, ethically grown coffee beans from around the world, ensuring a rich and diverse flavor profile. Our beans are carefully roasted in small batches by skilled artisans who bring out the unique characteristics of each variety. From the moment you take that first sip, you'll taste the dedication and passion that goes into every cup. But our commitment doesn't stop there.
                    </p>
                    <p className="paragraph-About none">
                        We prioritize sustainability at every step of the process, from supporting farmers to using eco-friendly packaging. When you choose our coffee, you're not just getting a great cup; you're supporting a community and a planet."
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
