import React from "react";
import "./newsletter.css";
const newsletter = () => {
  return (
    <section className="newsletter__container">
      <div className="newsletter__newstext">
        <h4>Sign Up for Newsletters</h4>
        <p>
          Get Updates about our latest<span> offers.</span>
        </p>
      </div>
      <div className="newsletter__form">
        <input type="text" placeholder="You E-Mail Adress" />
        <button className="btn">Sign Up</button>
      </div>
    </section>
  );
};

export default newsletter;
