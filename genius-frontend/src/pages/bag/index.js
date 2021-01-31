import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import { bagContext } from "../../Context";
import { useState, useEffect, useContext } from "react";
import "./styles.css";

const Bag = () => {
  const { bagOrder, setBagOrder } = useContext(bagContext);

  const [isHoverPlus, setIsHoverPlus] = useState(false);
  const [isHoverLess, setIsHoverLess] = useState(false);
  const [total, setTotal] = useState(0);

  React.useEffect(() => {
    updateTotal();
  }, [bagOrder]);

  const updateTotal = () => {
    let stackTotal = 0;
    bagOrder.forEach((e) => {
      stackTotal += e.price * e.quantity;
    });
    setTotal(stackTotal);
  };

  const updateQtyByInput = (item, product, e) => {
    if (item.id === product.id) {
      return (item.quantity = e.value);
    }
    return item;
  };

  return (
    <>
      <Navbar />
      <div className="bag_container">
        <p className="bag_title">Bag</p>
        <div className="bag_list_container">
          <p className="order_product"> Product</p>
          <p className="order_quantity">Quantity</p>
          <p className="order_price">Price</p>
        </div>
        <ul className="bag_card_container">
          {bagOrder.map((product, i) => (
            <li className="bag_card">
              <img
                className="bag_card_image"
                alt="product_picture"
                src="https://cdn.yoox.biz/41/41968007sg_11_f.jpg"
              />
              <div className="bag_product_name">
                <p className="bag_product">{product.name}</p>
              </div>
              <div className="bag_input_qty">
                <div
                  onMouseOver={() => {
                    setIsHoverLess(true);
                  }}
                  onMouseLeave={() => setIsHoverLess(false)}
                  className="input_less_container"
                  role="button"
                  // onClick={(e) => }
                >
                  <div
                    className="input_less"
                    style={{
                      backgroundColor: isHoverLess ? "white" : "#7d31c7",
                    }}
                  ></div>
                </div>
                <input
                  className="bag_card_quantity bag_card_item"
                  type="number"
                  value={product.quantity}
                  name={product.name}
                  min="1"
                  max="10"
                  onChange={(e) => {
                    console.log(bagOrder);
                    console.log(e.target.value);
                    console.log(product.quantity);
                  }}
                />
                <div
                  onMouseOver={() => setIsHoverPlus(true)}
                  onMouseLeave={() => setIsHoverPlus(false)}
                  className="input_plus_container"
                  // onClick={(e) => }
                >
                  <div
                    className="input_plus_bar_1"
                    style={{
                      backgroundColor: isHoverPlus ? "white" : "#7d31c7",
                    }}
                  ></div>
                  <div
                    className="input_plus_bar_2"
                    style={{
                      backgroundColor: isHoverPlus ? "white" : "#7d31c7",
                    }}
                  ></div>
                </div>
              </div>
              <button
                className="bag_button bag_card_item"
                onClick={() => {
                  setBagOrder((prevState) => {
                    console.log(prevState);
                    return prevState.filter(
                      (element) => element.id !== product.id
                    );
                  });
                }}
              >
                Remove
              </button>
              <div className="bag_total_width">
                <p className="bag_product_price">{product.price}$</p>
              </div>
            </li>
          ))}
        </ul>
        <div className="bag_total_container">
          <div className="bag_width_total">
            <div className="bag_total_title">
              <p>Total</p>
              <p>{total}$</p>
            </div>
            <div className="bag_checkout_btn">
              <Link to="/checkout" className="bag_link">
                <div className="bag_checkout">Checkout</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bag;
