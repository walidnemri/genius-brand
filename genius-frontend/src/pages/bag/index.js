import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const products = [
  {
    name: "genius sweartshirt neon green",
    price: 85,
  },
  {
    name: "genius hoodies black white",
    price: 100,
  },
];

const Bag = () => {
  const initalState = {
    "genius hoodies black white": 0,
    "genius sweartshirt neon green": 0,
    products,
    total: 0,
  };

  const [isHoverPlus, setIsHoverPlus] = React.useState(false);
  const [isHoverLess, setIsHoverLess] = React.useState(false);
  const [state, dispatch] = React.useReducer(reducer, initalState);

  const getTotal = () => {
    let total = 0;

    state.products.forEach(
      (product) => (total += product.price * parseInt(state[product.name]))
    );
    console.log(total);

    dispatch({ type: "total", payload: total });
    //return total
  };

  React.useEffect(() => {
    getTotal();
  }, [state["genius hoodies black white"]]);

  React.useEffect(() => {
    getTotal();
  }, [state["genius sweartshirt neon green"]]);

  function reducer(state, action) {
    switch (action.type) {
      case "fill_input":
        console.log(action.fieldName, action.payload);
        console.log({ ...state, [action.fieldName]: 1 });
        return {
          ...state,
          [action.fieldName]: action.payload,
        };
      case "less_input":
        return {
          ...state,
          [action.fieldName]: action.payload.toString(),
        };
      case "plus_input":
        return {
          ...state,
          [action.fieldName]: action.payload.toString(),
        };
      case "total":
        return {
          ...state,
          total: action.payload,
        };
      default:
        return state;
    }
  }
  return (
    <>
      <div className="bag_container">
        <p className="bag_title">Bag</p>
        <div className="bag_list_container">
          <p className="order_product"> Product</p>
          <p className="order_quantity">Quantity</p>
          <p className="order_price">Price</p>
        </div>

        <ul className="bag_card_container">
          {products.map((product) => (
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
                  onMouseOver={() => setIsHoverLess(true)}
                  onMouseLeave={() => setIsHoverLess(false)}
                  className="input_less_container"
                  role="button"
                  // onClick={(e) =>
                  //   // dispatch({
                  //   //   type: "less_input",
                  //   //   fieldName: product.name,
                  //   //   payload: parseInt(e.currentTarget.value) + 1,
                  //   // })
                  // }
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
                  value={state[product.name]}
                  name={product.name}
                  min="1"
                  max="10"
                  onChange={(e) =>
                    dispatch({
                      type: "fill_input",
                      fieldName: e.target.name,
                      payload: e.target.value,
                    })
                  }
                />
                <div
                  onMouseOver={() => setIsHoverPlus(true)}
                  onMouseLeave={() => setIsHoverPlus(false)}
                  className="input_plus_container"
                  // onClick={() =>
                  //   setInputValue((prevValue) => {
                  //     let parsed = parseInt(prevValue);
                  //     if (parsed < 100) {
                  //       parsed++;
                  //     }
                  //     return parsed.toString();
                  //   })
                  // }
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
              <button className="bag_button bag_card_item"> Remove</button>
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
              <p>{state.total}$</p>
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
