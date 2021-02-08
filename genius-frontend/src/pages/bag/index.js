import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import { bagContext, totalBag } from "../../Context";
import { useState, useEffect, useContext } from "react";
import "./styles.css";

const Bag = () => {
  const { bagOrder, setBagOrder } = useContext(bagContext);
  const { total, setTotal } = useContext(totalBag);

  const [isHoverPlus, setIsHoverPlus] = useState(false);
  const [isHoverLess, setIsHoverLess] = useState(false);

  React.useEffect(() => {
    console.log(bagOrder);
    updateTotal();
  }, [bagOrder]);

  const updateTotal = () => {
    let stackTotal = 0;
    bagOrder.forEach((e) => {
      stackTotal += parseInt(e.price) * parseInt(e.quantity);
    });
    setTotal(stackTotal.toString());
  };

  const updateQtyByInput = (e, item, product) => {
    if (item.id === product.id) {
      return { ...item, quantity: e.target.value };
    } else {
      return item;
    }
  };

  const updateQtyByLess = (e, item, product) => {
    console.log("ok");
    if (item.id === product.id && item.quantity > 1) {
      let parsed = parseInt(item.quantity);
      parsed--;
      return { ...item, quantity: parsed.toString() };
    } else {
      return item;
    }
  };
  const updateQtyByPlus = (e, item, product) => {
    if (item.id === product.id && item.quantity < 10) {
      let parsed = parseInt(item.quantity);
      parsed++;
      return { ...item, quantity: parsed.toString() };
    } else {
      return item;
    }
  };

  return (
    <>
      <Navbar />
      <div className="bag_container">
        <p className="bag_title">Bag</p>
        <div className="bag_list_container">
          <div className="bag-info-resume"></div>
          <div className="bag-info-resume">
            <p className="order_product"> Product</p>
          </div>
          <div className="bag-info-resume">
            <p className="order_size">Size</p>
          </div>
          <div className="bag-info-resume">
            <p className="order_quantity">Quantity</p>
          </div>
          <div className="bag-info-resume"></div>
          <div className="bag-info-resume">
            <p className="order_price">Price</p>
          </div>
        </div>
        <ul className="bag_card_container">
          {bagOrder.map((product, i) => (
            <li className="bag_card">
              <div className="bag_image bag-info">
                <img
                  className="bag_card_image"
                  alt="product_picture"
                  src="https://cdn.yoox.biz/41/41968007sg_11_f.jpg"
                />
              </div>
              <div className="bag_product_name bag-info">
                <p className="bag_product">{product.name}</p>
              </div>
              <div className="bag_size bag-info">
                <p>{product.size}</p>
              </div>
              <div className="bag_input_qty bag-info">
                <div
                  onMouseOver={() => {
                    setIsHoverLess(true);
                  }}
                  onMouseLeave={() => setIsHoverLess(false)}
                  className="input_less_container"
                  role="button"
                  onClick={(e) => {
                    setBagOrder(() =>
                      bagOrder.map((item, i) =>
                        updateQtyByLess(e, item, product)
                      )
                    );
                  }}
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
                    setBagOrder(() =>
                      bagOrder.map((item, i) =>
                        updateQtyByInput(e, item, product)
                      )
                    );
                  }}
                />
                <div
                  onMouseOver={() => setIsHoverPlus(true)}
                  onMouseLeave={() => setIsHoverPlus(false)}
                  className="input_plus_container"
                  onClick={(e) => {
                    setBagOrder(() =>
                      bagOrder.map((item, i) =>
                        updateQtyByPlus(e, item, product)
                      )
                    );
                  }}
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
                className="bag_button bag_card_item bag-info"
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
              <div className="bag_total_width bag-info">
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
