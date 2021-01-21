import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div></div>
      <ul>
        <li>
          <Link>e-shop</Link>
        </li>
        <li>
          <Link>lookbook</Link>
        </li>
        <li>
          <Link>news</Link>
        </li>
        <li>
          <Link>about</Link>
        </li>
      </ul>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default NavBar;
