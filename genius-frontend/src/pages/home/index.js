import "./styles.css";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useSpring, animated } from "react-spring";

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_image_background"></div>
      <div className="home_animation_container"></div>
      <div className="home_content_container">
        <h1 className="home_brand">genuis brand</h1>
        <ul className="home_nav">
          <li className="home_nav_ele">
            <Link className="home_link" to="/lookbook">
              lookbook
            </Link>
          </li>
          <li className="home_nav_ele">
            <Link className="home_link" to="/shop">
              e-shop
            </Link>
          </li>
          <li className="home_nav_ele">
            <Link className="home_link" to="/news">
              news
            </Link>
          </li>
          <li className="home_nav_ele">
            <Link className="home_link" to="/about">
              about
            </Link>
          </li>
        </ul>
        <ul className="home_icon">
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
