import React from "react";
import "./postHeader.css";
import ReactPlayer from "react-player";
import bg from "../../Assets/phone_bg.mp4";
import { Link } from "react-router-dom";
const postHeader = () => {
  return (
    <section id="postHeader">
      <div className="postHeader__msg">
        <h4>Limited Time Offer</h4>
        <h2>Amazing Discounts</h2>
        <h1>On all Products</h1>
        <p>Use discount code for up to 50% off!</p>
        <Link to="/shop">
          <button className="btn">Buy Now</button>
        </Link>
      </div>
      <div>
        <ReactPlayer
          id="phone__player"
          url={bg}
          width="100%"
          height="100%"
          playing={true}
          loop={true}
          muted={true}
        />
      </div>
    </section>
  );
};

export default postHeader;
