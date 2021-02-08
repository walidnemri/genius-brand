import React, { Component, useState, useContext } from "react";
import { bagContext } from "../../Context";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ pageActive }) {
  const { bagOrder, setBagOrder } = useContext(bagContext);

  const [isActive, setIsActive] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [menuIsClick, setMenuIsClick] = useState(false);

  const signalBag = () => {
    if (bagOrder.length !== 0) {
      return <div className="navbar_signal_bag"></div>;
    }
  };

  return (
    <div
      className={menuIsClick ? "navbar_container_active" : "navbar_container"}
    >
      <div
        className="navbar_menu_container"
        onClick={() => {
          setMenuIsClick((prevState) => !prevState);
        }}
      >
        <div className="navbar_menu"></div>
      </div>
      <div className="navbar_logo"></div>
      <ul
        className={
          menuIsClick ? "navbar_links_container_open" : "navbar_links_container"
        }
      >
        <li className="navbar_link_container">
          <Link
            className={
              pageActive === "e-shop"
                ? "navbar_link_active navbar_link"
                : "navbar_link"
            }
            to="/e-shop"
          >
            e-shop
          </Link>
        </li>
        <li className="navbar_link_container">
          <Link
            className={
              pageActive === "lookbook"
                ? "navbar_link_active navbar_link"
                : "navbar_link"
            }
            to="/lookbook"
          >
            lookbook
          </Link>
        </li>
        <li className="navbar_link_container">
          <Link
            className={
              pageActive === "about"
                ? "navbar_link_active navbar_link"
                : "navbar_link"
            }
            to="/about"
          >
            about
          </Link>
        </li>
      </ul>
      <ul className="navbar_icons_container">
        <li className="navbar_icon_container">
          <ion-icon
            className="navbar-icon"
            name="search-outline"
            onClick={() => setIsActive(false)}
          ></ion-icon>
        </li>
        <li className="navbar_icon_container">
          <ion-icon className="navbar-icon" name="person-outline"></ion-icon>
        </li>
        <li className="navbar_icon_container">
          <Link to="/bag" className="bag_icon">
            <ion-icon className="navbar-icon" name="bag-outline"></ion-icon>
            {signalBag()}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
