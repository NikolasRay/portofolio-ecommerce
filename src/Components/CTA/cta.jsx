import React from "react";
import "./cta.css";

const cta = () => {
  return (
    <section className="cta__banner">
      <div className="cta__box1 box">
        <h4>Special Deals</h4>
        <h2>
          Free Copy of<span> Elden Ring</span> with every purchase
        </h2>
        <button className="btn">Learn More</button>
      </div>
      <div className="cta__box3 box">
        <h4></h4>
        <h2>
          Make CDPR remake<span> Cyberpunk 2077</span>
        </h2>
        <button className="">Learn More</button>
      </div>
      <div className="cta__box2 box">
        <h4>Special Services</h4>
        <h2>
          We can drill your Apple device to create a<span> Headphone Jack</span>
        </h2>
        <button className="btn">Don't Even Try</button>
      </div>
    </section>
  );
};

export default cta;
