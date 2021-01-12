/* eslint-disable default-case */
import defaultImage from "../../assets/pictureviolet.jpg";
import lookbookImage from "../../assets/lookbook.jpg";
import { useEffect, useRef } from "react";

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

  // useEffect(() => {
  //   if (bckgImage !== "default") {
  //     filterControle.current.setAttribute("scale", "100");
  //     setTimeout(function () {
  //       filterControle.current.setAttribute("scale", "10");
  //     }, 500);
  //   }
  // }, [bckgImage]);

  return (
    <>
      {/* <svg className="home_animation">
        <filter id="hover_filter">
          <feTurbulence
            baseFrequency="0.0"
            result="noise"
            numOctaves="10"
            seed="0"
          >
            <animate
              attributeName="baseFrequency"
              values="0.0;0.05;0.1;0.6"
              dur="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="seed"
              from="0"
              to="2000"
              dur="3s"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="NOISE"
            scale="3"
            ref={filterControle}
          ></feDisplacementMap>
        </filter>
      </svg> */}
      <div
        className="home_image_background"
        style={animeBckg(hover, bckgImage)}
      ></div>
    </>
  );
};

export default BckgImage;
