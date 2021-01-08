import "./styles.css";
import BckgImage from "./bckgImage";
import { Link } from "react-router-dom";
import Landing from "../landing";
import { useState } from "react";

const Home = () => {
  const [hover, setHover] = useState(false);
  const [click, setClick] = useState(false);
  const [changeBckg, setChangeBckg] = useState("default");

  const nav = ["e-shop", "lookbook", "news", "about"];

  return (
    <>
      <div className="home_container">
        <BckgImage hover={hover} click={click} bckgImage={changeBckg} />
        <div className="home_content_container">
          <h1 className="home_brand">genius brand</h1>
          <ul className="home_nav">
            {nav.map((e, i) => (
              <li
                key={i}
                className="home_nav_ele"
                onClick={() => setClick(true)}
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
          <ul className="home_icon">
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
