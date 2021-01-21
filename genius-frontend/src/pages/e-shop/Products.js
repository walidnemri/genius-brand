import React from "react";
import "./styles.css";
import Cards from "../../components/productCards/Cards.js";
import shirt from "../../assets/t-shirt.png";

const randomProducts = [
  {
    title: "Large shirt",
    categorie: "clothing",
    price: "40€",
    image: shirt,
  },
  {
    title: "Large shirt",
    categorie: "clothing",
    price: "40€",
    image: shirt,
  },
  {
    title: "Marcel",
    categorie: "clothing",
    price: "25€",
    image: shirt,
  },
  {
    title: "Marcel",
    categorie: "clothing",
    price: "25€",
    image: shirt,
  },
  {
    title: "Hoodie",
    categorie: "clothing",
    price: "90€",
    image: shirt,
  },
  {
    title: "Hoodie",
    categorie: "clothing",
    price: "90€",
    image: shirt,
  },
  {
    title: "Backpack",
    price: "35€",
    categorie: "bag",
    image: shirt,
  },
  {
    title: "Bumpack",
    price: "25€",
    categorie: "bag",
    image: shirt,
  },
  {
    title: "Bumpack",
    price: "25€",
    categorie: "bag",
    image: shirt,
  },
  {
    title: "Hat",
    categorie: "accessories",
    price: "30€",
    image: shirt,
  },
  {
    title: "Hat",
    categorie: "accessories",
    price: "30€",
    image: shirt,
  },
  {
    title: "Cap",
    categorie: "accessories",
    price: "25€",
    image: shirt,
  },
  {
    title: "Cap",
    categorie: "accessories",
    price: "25€",
    image: shirt,
  },
];

class Products extends React.Component {
  render() {
    return (
      <div class="product-side">
        {randomProducts.map((item) => (
          <Cards
            title={item.title}
            image={item.image}
            categorie={item.categorie}
            price={item.price}
          />
        ))}
      </div>
    );
  }
}

export default Products;
