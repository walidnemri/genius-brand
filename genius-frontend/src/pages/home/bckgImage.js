/* eslint-disable default-case */
import defaultImage from "../../assets/pictureviolet.jpg";
import lookbookImage from "../../assets/lookbook.jpg";
import { useEffect, useRef } from "react";
import "./glitchEffect.css";

const BckgImage = ({ hover, click, bckgImage, changeFilter, changeState }) => {
  const filterControle = useRef();

  const animeBckg = (hover, bckgImage) => {
    if (hover) {
      switch (bckgImage) {
        case "lookbook":
          return {
            filter: "url(#hover_filter)",
            backgroundImage: `url(${lookbookImage})`,
            transition: "background-image 0.5s cubic-bezier(0.65, 0, 0.35, 1)",
          };
        case "e-shop":
          return {
            filter: "url(#hover_filter)",
            backgroundImage: `url(${lookbookImage})`,
            transition: "background-image 0.5s cubic-bezier(0.65, 0, 0.35, 1)",
          };
        case "news":
          return {
            filter: "url(#hover_filter)",
            backgroundImage: `url(${lookbookImage})`,
            transition: "background-image 0.5s cubic-bezier(0.65, 0, 0.35, 1)",
          };
        case "about":
          return {
            filter: "url(#hover_filter)",
            backgroundImage: `url(${lookbookImage})`,
            transition: "background-image 0.5s cubic-bezier(0.65, 0, 0.35, 1)",
          };
      }
    } else {
      return {
        backgroundImage: `url(${defaultImage})`,
        transition: "background-image 0.5s cubic-bezier(0.65, 0, 0.35, 1)",
      };
    }
  };

  return (
    <>
      <div
        className="home_image_background_container"
        style={animeBckg(hover, bckgImage)}
      >
        <div className="glicth_img"></div>
        <div className="glicth_img"></div>
        <div className="glicth_img"></div>
        <div className="glicth_img"></div>
        <div className="glicth_img"></div>
      </div>
    </>
  );
};

export default BckgImage;
