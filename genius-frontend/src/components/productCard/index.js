import { Link } from "react-router-dom";
import { useState } from "react";
import "./style.css";

const ProductCard = ({ product, id }) => {
  const { name, price, picture } = product;
  console.log(name, price, picture);
  const [pictureChange, setPictureChange] = useState(0);

  return (
    <Link to={`./product/${id}`} className="product-card-container">
      <img
        className="picture-product"
        src={picture[pictureChange]}
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
