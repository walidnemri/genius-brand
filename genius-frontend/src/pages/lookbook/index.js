import React, { useState } from "react";
import lb1 from "../../assets/lookbook/lb1.jpg";
import lb2 from "../../assets/lookbook/lb2.jpg";
import lb3 from "../../assets/lookbook/lb3.jpg";
import lb4 from "../../assets/lookbook/lb4.jpg";
import lb5 from "../../assets/lookbook/lb5.jpg";
import lb6 from "../../assets/lookbook/lb6.jpg";
import lb7 from "../../assets/lookbook/lb7.jpg";
import lb8 from "../../assets/lookbook/lb8.jpg";
import lb9 from "../../assets/lookbook/lb9.jpg";
import lb10 from "../../assets/lookbook/lb10.jpg";
import lb11 from "../../assets/lookbook/lb11.jpg";
import lb12 from "../../assets/lookbook/lb12.jpg";
import lb13 from "../../assets/lookbook/lb13.jpg";
import lb14 from "../../assets/lookbook/lb14.jpg";
import lb15 from "../../assets/lookbook/lb15.jpg";
import lb16 from "../../assets/lookbook/lb16.jpg";
import lb17 from "../../assets/lookbook/lb17.jpg";
import lb18 from "../../assets/lookbook/lb18.jpg";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./style.css";

function Lookbook() {
  const [imageSelect, setImageSelect] = useState("default");
  const [isHover, setIsHover] = useState(true);
  const dataImage1 = [lb1, lb2, lb3, lb4, lb5, lb6, lb7, lb8, lb9];
  const dataImage2 = [lb10, lb11, lb12, lb13, lb14, lb15, lb16, lb17, lb18];
  const dateImageFull = dataImage1.concat(dataImage2);
  return (
    <>
      <div className="lookbook_container">
        <div className="lookbook_right_section">
          <div className="lookbook_image_selection">
            <div className="lookbook_image_selection_left">
              {dataImage1.map((e, i) => (
                <div
                  key={i}
                  className="lookbook_image_selection_unique_card"
                  style={{ backgroundImage: `url(${e})` }}
                  onMouseEnter={() => setImageSelect(e)}
                  onClick={() => setImageSelect(e)}
                ></div>
              ))}
            </div>
            <div className="lookbook_image_selection_left">
              {dataImage2.map((e, i) => (
                <div
                  key={i}
                  className="lookbook_image_selection_unique_card"
                  style={{ backgroundImage: `url(${e})` }}
                  onMouseOver={() => setImageSelect(e)}
                  onClick={() => setImageSelect(e)}
                ></div>
              ))}
            </div>
          </div>
          <div className="lookbook_title_container">
            <p className="lookbook_title">20Spring</p>
            <div className="lookbook_title_ligne"></div>
            <p className="lookbook_title">Collection</p>
          </div>
          <div
            className="lookbook_logo_container"
            style={{ backgroundImage: `url(${logo})` }}
          ></div>
        </div>
        <div className="lookbook_left_section">
          <div className="lookbook_image_back_filter"></div>
          <div
            className="lookbook_image_back"
            style={{
              backgroundImage: `url(${
                imageSelect === "default" ? lb1 : imageSelect
              })`,
            }}
          ></div>
          <div
            className="lookbook_image_container"
            style={{
              backgroundImage: `url(${
                imageSelect === "default" ? lb1 : imageSelect
              })`,
            }}
          ></div>
          {/* <Swiper className="lookbook_swiper">
            {dateImageFull.map((e) => (
              <SwiperSlide className="lookbook_swiper_image_container">
                <div
                  className="lookbook_swiper_image"
                  style={{
                    backgroundImage: `url(${e})`,
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper> */}
          <ul className="lookbook_navbar">
            <li className="lookbook_navbar_name">
              <Link
                className="lookbook_link lookbook_navbar_animation"
                to="/e-shop"
                onMouseEnter={() => setIsHover(false)}
                onMouseLeave={() => setIsHover(true)}
              >
                e-shop
              </Link>
            </li>
            <li className="lookbook_navbar_name">
              <Link
                className={
                  isHover
                    ? "lookbook_link lookbook_underline_static"
                    : "lookbook_link"
                }
                to="/lookbook"
              >
                lookbook
              </Link>
            </li>
            <li className="lookbook_navbar_name">
              <Link
                className="lookbook_link lookbook_navbar_animation"
                to="/about"
                onMouseEnter={() => setIsHover(false)}
                onMouseLeave={() => setIsHover(true)}
              >
                about
              </Link>
            </li>
            <li className="lookbook_navbar_name">
              <Link
                className="lookbook_link lookbook_navbar_animation"
                to="/news"
                onMouseEnter={() => setIsHover(false)}
                onMouseLeave={() => setIsHover(true)}
              >
                news
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Lookbook;
