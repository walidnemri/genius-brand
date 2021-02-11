import React from "react";
import "./style.css";
import aboutPage from "./logo/About-page.png";

function About() {
  return (
    <>
      <div className="wrapper-body">
        <h1>About</h1>
        <img src={aboutPage} className="image-about" />
        <div className="wrapper"></div>
      </div>
    </>
  );
}

export default About;
