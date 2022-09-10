import React, { useState, useEffect } from "react";
import "./header.css";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import logo from "../../Assets/logo1nobgcropped.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [path, setPath] = useState("");

  useEffect(() => {
    getPath();
  }, [path]);

  function getPath() {
    setPath(window.location.pathname);

    if (path === "/") {
      document.title = "Home";
    } else
      document.title =
        path.substring(1).charAt(0).toUpperCase(0) + path.slice(2);
  }

  return (
    <section id="header" className="header header__container">
      <div>
        <Link to="/">
          <a onClick={() => setPath("/")} className="logo_link">
            <img src={logo} className="header__logo" />
          </a>
        </Link>
      </div>
      <div>
        <ul id="navbar" className="">
          <Link to="/">
            <li onClick={() => setPath("/")}>
              <a className={path === "/" ? "active" : " "} href="">
                Home
              </a>
            </li>
          </Link>
          <Link to="/shop">
            <li onClick={() => setPath("/shop")}>
              <a className={path === "/shop" ? "active" : " "}>Shop</a>
            </li>
          </Link>
          <Link to="/about">
            <li onClick={() => setPath("/about")}>
              <a className={path === "/about" ? "active" : " "}>About</a>
            </li>
          </Link>
          <Link to="/contact">
            <li onClick={() => setPath("/contact")}>
              <a className={path === "/contact" ? "active" : "."}>Contact</a>
            </li>
          </Link>
          <li>
            <a href="">
              <BsCart4 />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
