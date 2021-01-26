import Navbar from "../../components/navbar";
import Banner from "../../components/banner";
import Card from "../../components/productCard";
import "./styles.css";
import { useState } from "react";

const product = [
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
  {
    name: "black hoodie special edition",
    price: 120,
    description:
      "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
    picture: [
      "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
      "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    ],
  },
];

const Eshop = ({ products }) => {
  const [filter, setFilter] = useState();
  const [isSelect, setIsSelect] = useState();
  const [isClick, setIsClick] = useState(false);

  return (
    <div>
      <Banner style={{ position: "fixed" }} />
      <Navbar pageActive={"e-shop"} style={{ position: "fixed" }} />
      <div className="e-shop_container">
        <div className="filter_container">
          <ul>
            <li>
              <p>Categories</p>
              <ul>
                <li>
                  <button>Accessories</button>
                </li>
                <li>
                  <button>Bags</button>
                </li>
                <li>
                  <button>Clothings</button>
                </li>
              </ul>
            </li>
            <li>
              <p>Colors</p>
              <ul>
                <li>
                  <button>Purple</button>
                </li>
                <li>
                  <button>Black</button>
                </li>
                <li>
                  <button>Red</button>
                </li>
                <li>
                  <button>Yellow</button>
                </li>
                <li>
                  <button>Blue</button>
                </li>
              </ul>
            </li>
            <li>
              <p>Sizes</p>
              <ul>
                <li>
                  <button>XS</button>
                </li>
                <li>
                  <button>S</button>
                </li>
                <li>
                  <button>M</button>
                </li>
                <li>
                  <button>L</button>
                </li>
                <li>
                  <button>XL</button>
                </li>
                <li>
                  <button>XXL</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="product-container">
          {product.map((e, i) => {
            return <Card key={i} product={e} id={i} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Eshop;
