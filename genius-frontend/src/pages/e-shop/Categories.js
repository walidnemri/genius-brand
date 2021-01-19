import React from "react";
import "./styles.css";

const categories = ["Accessories", "Bags", "Clothings"];
const colors = ["Purple", "Black", "Red", "Yellow", "Blue"];

const sizes = ["S", "M", "L", "XL", "XXL"];

class Categories extends React.Component {
  render() {
    return (
      <div className="categories-filter">
        <h2>Categories</h2>
        <ul>
          {categories.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Colors</h2>
        <ul>
          {colors.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <h2>Sizes</h2>
        <ul>
          {sizes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Categories;
