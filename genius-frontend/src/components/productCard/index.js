import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./style.css";

const picture = {
  "t-shirt": [
    "https://cdn.yoox.biz/12/12471306bg_13_f.jpg",
    "https://cdn.yoox.biz/12/12471306bg_13_r.jpg",
  ],
  hoodies: [
    "https://cdn.yoox.biz/14/14063120qv_13_f.jpg",
    "https://cdn.yoox.biz/14/14063120qv_13_r.jpg",
  ],
  bottom: [],
  sweatshirts: [
    "https://cdn.yoox.biz/14/14068435kb_13_f.jpg",
    "https://cdn.yoox.biz/14/14068435kb_13_r.jpg",
  ],
};

const ProductCard = ({ product, categoryArray }) => {
  const { name, price, id, category_id } = product;
  const [pictureChange, setPictureChange] = useState(0);
  const [pictureArray, setPictureArray] = useState([]);

  const sortPicture = (categoryId) => {
    categoryArray.forEach((cate) => {
      if (cate.id === categoryId) {
        setPictureArray(picture[cate.name]);
      }
    });
  };

  useEffect(() => {
    sortPicture(category_id);
  }, []);

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
