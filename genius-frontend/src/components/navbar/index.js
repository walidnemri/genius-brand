import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar({ pageActive }) {
  const [isActive, setIsActive] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [menuIsClick, setMenuIsClick] = useState(false);
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
              pageActive === "news"
                ? "navbar_link_active navbar_link"
                : "navbar_link"
            }
            to="/news"
          >
            news
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
          <Link to="/bag">
            <ion-icon className="navbar-icon" name="bag-outline"></ion-icon>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
