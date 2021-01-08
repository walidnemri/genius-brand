import React from "react";
import Products from "./Products.js";
import "./styles.css";
import Categories from "./Categories.js";
import Banner from "../../components/banner/Banner.js";

class E_shop extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <div className="shop">
          <Categories />
          <Products />
        </div>
      </div>
    );
  }
}

export default E_shop;