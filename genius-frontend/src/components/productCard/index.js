import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

const picture = [
  [
    "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
    "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
  ],
  [
    "https://cdn.yoox.biz/14/14063120qv_13_f.jpg",
    "https://cdn.yoox.biz/14/14063120qv_13_r.jpg",
  ],
];

const pictureO = {
  hoodie: [
    "https://cdn.yoox.biz/14/14063120qv_13_f.jpg",
    "https://cdn.yoox.biz/14/14063120qv_13_r.jpg",
  ],
  "t-shirt": [
    "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
    "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
  ],
};

const ProductCard = ({ product }) => {
  const { name, price, id, category_id } = product;
  const [pictureChange, setPictureChange] = useState(0);
  const [pictureArray, setPictureArray] = useState([]);
  const [categoryArray, setCategoryArray] = useState([]);

  const getCategory = async () => {
    let data;
    try {
      data = await axios.get("http://localhost:3002/api/categories");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
    if (data) setCategoryArray(data.data.category);
  };

  const sortPicture = (categoryId) => {
    let cat = "okkkk";
    categoryArray.forEach((cate) => {
      if (cate.id === categoryId) {
        console.log(cate.name);
        setPictureArray(pictureO[cate.name]);
        cat = cate.name;
      }
    });
    console.log("cat", cat);
    //console.log(pictureO[cat[0].name]);
    //setPictureArray(pictureO[cat.name]);
  };

  useEffect(() => {
    getCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    sortPicture(category_id);
  }, [categoryArray]);

  return (
    <Link to={`./product/${id}`} className="product-card-container">
      <img
        className="picture-product"
        src={pictureArray[pictureChange]}
        alt="product_picture"
        onMouseEnter={() => setPictureChange(1)}
        onMouseLeave={() => setPictureChange(0)}
      />
      <div className="info-container">
        <p className="name">{name}</p>
        <p className="price"> {price + "€"}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
