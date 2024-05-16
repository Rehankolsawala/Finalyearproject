import React from "react";
import ReviewCard from "../Review-card/ReviewCard"
import img1 from "../Assests/pic1.png"
import img2 from "../Assests/pic2.png";
import img3 from "../Assests/pic3.png";
import "./Review.css"; // Import the CSS file

const Review = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <h1 className="font-semibold text-center text-4xl lg:mt-14 mt-24">
        Customer's Reviews
      </h1>

      <div className="flex flex-col lg:flex-row gap-5 justify-center py-4 my-8">
        <ReviewCard img={img1} title="Olivia Ava" />
        <ReviewCard img={img2} title="John Deo" />
        <ReviewCard img={img3} title="Sofia Zoe" />
      </div>

      <div className="flex flex-col lg:flex-row gap-5 justify-center py-4 my-8 lg:mt-5">
        <ReviewCard img={img1} title="Olivia Ava" />
        <ReviewCard img={img2} title="John Deo" />
        <ReviewCard img={img3} title="Sofia Zoe" />
      </div>
    </div>
  );
};

export default Review;