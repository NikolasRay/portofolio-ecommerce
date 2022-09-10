import React from "react";
import "./footer.css";
import Logo from "../../Assets/logo1nobgcropped.png";
import PlayStore from "../../Assets/play.jpg";
import AppStore from "../../Assets/app.jpg";
import Payments from "../../Assets/pay.png";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillInstagram,
} from "react-icons/ai";

const footer = () => {
  return (
    <div>
      <footer className="footer__container">
        <div className="col">
          <img className="logo" src={Logo} alt="pic"></img>
          <h4>Contact</h4>
          <p>
            <strong>Address:</strong> Amazing Road 123 , Athens
          </p>
          <p>
            <strong>Phone:</strong> +30-1234567890
          </p>
          <p>
            <strong>Hours:</strong> 09:00 - 21:00, Mon - Sat
          </p>
          <div className="follow">
            <h4>Find us!</h4>
            <div className="icon">
              <i>
                <a href="https://www.facebook.com/" target="_blank">
                  <AiFillFacebook className="facebook socials" />
                </a>
              </i>
              <i>
                <a href="https://twitter.com/" target="_blank">
                  <AiOutlineTwitter className="twitter socials" />
                </a>
              </i>
              <i>
                <a href="https://www.linkedin.com/" target="_blank">
                  <AiFillLinkedin className="linkedin socials" />
                </a>
              </i>
              <i>
                <a href="https://www.instagram.com/" target="_blank">
                  <AiFillInstagram className="instagram socials" />
                </a>
              </i>
            </div>
          </div>
        </div>
        <div className="col about">
          <h4>About</h4>
          <a href="#">About Us</a>
          <a href="#">Privacy and Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Contact Us</a>
        </div>
        <div className="col install">
          <h4>Get the App</h4>
          <p>From the App Store or Google Play</p>
          <div className="row">
            <img src={AppStore} alt=""></img>
            <img src={PlayStore} alt=""></img>
          </div>
          <p>Secure Payment</p>
          <img src={Payments} alt=""></img>
        </div>
      </footer>
      <div className="copyright">
        <p>©2022, Nick Vasileiou - React Portofollio Ecommerce Template</p>
      </div>
    </div>
  );
};

export default footer;
