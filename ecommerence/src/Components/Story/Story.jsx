import React from "react";
import img from '../Assests/Story.jpg'
import "./Story.css";

const Story = () => {
    return (
        <div className="Story">
            <h1 className="title-Story">Our Story</h1>

            <div className="content-Story">

                <div className="text-container-Story">
                    <h2 className="subtitle-Story">
                        Brewing Dreams: The Inception of Our Café
                    </h2>
                    <p className="paragraph-Story">
                        Embarking on our journey with a shared love for coffee and community, we founded our café with a vision to create a warm, inviting space where people could connect over a great cup of coffee. The idea first brewed during late-night conversations, where we dreamed of a place that would not only serve exceptional coffee but also foster a sense of belonging. With excitement and determination, we scoured neighborhoods for the perfect location, finally settling on a cozy spot with ample natural light. After months of planning, designing, and tasting countless coffee blends, we opened our doors, eager to share our passion with the world. From the aroma of freshly ground beans to the laughter of regulars, our café has become more than just a business—it's a place where dreams are brewed and friendships are savored.
                    </p>
                    <p className="paragraph-Story none">

                        "What a gem of a cafe! The moment I stepped inside, I was greeted with warmth and hospitality. The interior was tastefully designed, creating a cozy retreat from the hustle and bustle of the city. The coffee selection was impressive, and each cup was expertly crafted. I couldn't resist indulging in their homemade desserts, which were simply heavenly. This place has quickly become my go-to spot for coffee dates and solo relaxation sessions." </p>
                </div>
                <div className="image-container-Story">
                    <img className="image-Story" src={img} alt="img" />
                </div>
            </div>
        </div>
    );
};

export default Story;
