import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { BsStarHalf, BsStarFill } from "react-icons/bs";
import "./ReviewCard.css"; // Import the CSS file

const ReviewCard = (props) => {
  return (
    <div className="container">
      <div className="flex items-center justify-start">
        <div className="avatar">
          <img src={props.img} alt="img" />
        </div>
        <div className="info">
          <h2 className="title">{props.title}</h2>
          <div className="rating">
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarFill className="star" />
            <BsStarHalf className="star" />
          </div>
        </div>
        <span className="quote">
          <FaQuoteRight className="quote-icon" size={42} />
        </span>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
       consequatur fuga suscipit perspiciatis totam. Eos esse nisi omnis dicta,
        aperiam distinctio fuga ipsam rerum rem.</p>

    </div>
   
  );
};

export default ReviewCard;
