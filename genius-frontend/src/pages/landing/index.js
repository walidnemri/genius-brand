import React, { useState } from "react";
import image from "../../assets/img1.webp";
import BlackSphere from "../../components/blackSphere";
import Email from "./EmailFormLandingPage.js";
import "./styles.css";

const Landing = () => {
  const [showImg1, setShowImg1] = useState(false);
  //console.log(image)

  const showImage = (date) => {
    console.log("ok");
    setShowImg1(true);
  };
  return (
    <div className="landing_container">
      <div className="landing_container_opacity">
        <div className="landing_container_images">
          <div className="landing_image landing_img1">
            <div className={showImg1 ? "landing_noblur" : "landing_blur"}></div>
          </div>
          <div className="landing_image landing_img2">
            <div className="landing_blur"></div>
          </div>
          <div className="landing_image landing_img3">
            <div className="landing_blur"></div>
          </div>
          <div className="landing_image landing_img4">
            <div className="landing_blur"></div>
          </div>
        </div>
        <div className="landing_title">
          <h1>we're comming soon</h1>
          <h1>get notified when site goes live</h1>
        </div>
        <div className="landing_opacity"></div>
      </div>
      <h1 className="landing_brand">genius brand</h1>
      <div className="landing_collection">
        <p>21</p>
      </div>
      <BlackSphere showImage={showImage} showImg1={showImg1} />
      <Email />
    </div>
  );
};

export default Landing;
