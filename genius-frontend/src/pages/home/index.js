import "./styles.css";
import "./glitchEffect.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import defaultImage from "../../assets/pictureviolet.jpg";
import lookbookImage from "../../assets/lookbook.jpg";

const Home = () => {
  const [hover, setHover] = useState(false);
  const [changeBckg, setChangeBckg] = useState("default");

  const nav = ["e-shop", "lookbook", "news", "about"];

  const animeBckg = (hover, bckgImage) => {
    if (hover) {
      // eslint-disable-next-line default-case
      switch (bckgImage) {
        case "lookbook":
          console.log("lookbook");
          return {
            filter: "url(#hover_filter)",
            backgroundImage: `url(${lookbookImage})`,
            transition: "background-image 1s cubic-bezier(0.65, 0, 0.35, 1)",
          };
        case "e-shop":
          console.log("e_shop");
          return {
            filter: "url(#hover_filter)",
            backgroundImage: `url(${lookbookImage})`,
            transition: "background-image 1s cubic-bezier(0.65, 0, 0.35, 1)",
          };
        case "news":
          console.log("new");
          return {
            filter: "url(#hover_filter)",
            backgroundImage: `url(${lookbookImage})`,
            transition: "background-image 1s cubic-bezier(0.65, 0, 0.35, 1)",
          };
        case "about":
          console.log("about");
          return {
            filter: "url(#hover_filter)",
            backgroundImage: `url(${lookbookImage})`,
            transition: "background-image 1s cubic-bezier(0.65, 0, 0.35, 1)",
          };
      }
    } else {
      return {
        backgroundImage: `url(${defaultImage})`,
        transition: "background-image 1s cubic-bezier(0.65, 0, 0.35, 1)",
      };
    }
  };

  return (
    <>
      <div className="home_var">
        <div className="home_image_background_container">
          <div
            className={hover ? "img glitch__img" : "img"}
            style={animeBckg(hover, changeBckg)}
          ></div>
          <div
            className={hover ? "img glitch__img" : "img"}
            style={animeBckg(hover, changeBckg)}
          ></div>
          <div
            className={hover ? "img glitch__img" : "img"}
            style={animeBckg(hover, changeBckg)}
          ></div>
          <div
            className={hover ? "img glitch__img" : "img"}
            style={animeBckg(hover, changeBckg)}
          ></div>
          <div
            className={hover ? "img glitch__img" : "img"}
            style={animeBckg(hover, changeBckg)}
          ></div>
        </div>
        <h1 className="home_brand">genius brand</h1>
        <ul className="home_nav">
          {nav.map((e, i) => (
            <li
              key={i}
              className="home_nav_ele"
              onMouseEnter={() => {
                setHover(true);
                setChangeBckg(e);
              }}
              onMouseLeave={() => {
                setHover(false);
                setChangeBckg("default");
              }}
            >
              <Link className="home_link" to={`/${e}`}>
                {e}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
