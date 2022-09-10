import React from "react";
import "./features.css";
import FreeShipping from "../../Assets/freeshipping.png";
import SaveMoney from "../../Assets/savemoney.png";
import OrderOnline from "../../Assets/orderonline.png";
import Promo from "../../Assets/promo.png";
import Discount from "../../Assets/discount.png";
import Support from "../../Assets/support.png";
const features = () => {
  return (
    <section className="features">
      <div className="feature__box">
        <img src={FreeShipping} alt="" />
        <h6>Free Shipping!</h6>
      </div>
      <div className="feature__box">
        <img src={OrderOnline} alt="" />
        <h6>Order Online</h6>
      </div>
      <div className="feature__box">
        <img src={SaveMoney} alt="" />
        <h6>Save Money</h6>
      </div>
      <div className="feature__box">
        <img src={Promo} alt="" />
        <h6>Promotions</h6>
      </div>
      <div className="feature__box">
        <img src={Discount} alt="" />
        <h6>Discount Codes</h6>
      </div>
      <div className="feature__box">
        <img src={Support} alt="" />
        <h6>Phone Support 24/7</h6>
      </div>
    </section>
  );
};

export default features;
