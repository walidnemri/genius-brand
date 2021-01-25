import { Link } from "react-router-dom";
import "style.css";

const ProductCard = ({ product }) => {
  const { name, price, picture } = product;

  return (
    <Link to="product">
      <div className="picture-product"></div>
      <div className="info-container">
        <p className="name"></p>
        <p className="price"></p>
      </div>
    </Link>
  );
};

export default ProductCard;
