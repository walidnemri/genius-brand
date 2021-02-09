import "./style.css";
import { useReducer } from "react";
import { bagContext, totalBag } from "../../Context";
import { useState, useEffect, useContext } from "react";
import emailjs from "emailjs-com";

const Order = () => {
  const { bagOrder, setBagOrder } = useContext(bagContext);
  const { total, setTotal } = useContext(totalBag);

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    contry: "",
    address: "",
    city: "",
    zip: "",
    shipping: "0",
    nameOnCard: "",
    creditCardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
    totalOrder: 0,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, { type, field, payload }) {
    switch (type) {
      case "HANDLE INPUT TEXT":
        return {
          ...state,
          [field]: payload,
        };
      case "SHIPPING":
        return {
          ...state,
          [field]: payload,
        };
      case "TOTAL":
        return {
          ...state,
          [field]: payload,
        };
      default:
        return state;
    }
  }

  const handleTextChange = (e) => {
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const changeShipping = (e) => {
    dispatch({
      type: "SHIPPING",
      field: "shippingPrice",
      payload: e.target.value,
    });
  };

  const getTotal = () => {
    let totalStack = bagOrder.length ? 0 : state.shipping;

    bagOrder.forEach(
      (item, index) => (totalStack = parseInt(total) + parseInt(state.shipping))
    );

    console.log(totalStack);
    dispatch({
      type: "TOTAL",
      field: "totalOrder",
      payload: totalStack,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
    emailjs
      .sendForm(
        "service_soxrgsz",
        "template_8jdo8mq",
        e.target,
        "user_DszOb9eEmlkIXO0yKpNNp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    getTotal();
  }, [state.shipping]);

  return (
    <div className="order_container">
      <div className="order_reminder_container">
        <div className="order_reminder_product_container">
          <h3 className="order_title-for-reminder">ORDER</h3>
          {bagOrder.map((product, i) => {
            return (
              <div key={i} className="order_reminder_card">
                <div className="oder_reminder_img_container">
                  <img
                    className="order_reminder_img"
                    alt="product_picture"
                    src="https://cdn.yoox.biz/41/41968007sg_11_f.jpg"
                  />
                </div>
                <div className="order_reminder_name-info_container">
                  <p className="order_reminder_name">{product.name}</p>
                  <div className="order_reminder_info-product_container">
                    <div className="order_reminder_size_container">
                      <p className="order_reminder_size_title">Size:</p>
                      <p className="order_reminder_size">{product.size}</p>
                    </div>
                    <div className="order_reminder_qty_container">
                      <p className="order_reminder_qty_title">quantity:</p>
                      <p className="order_reminder_qty">{product.quantity}</p>
                    </div>
                    <p className="order_reminder_price">{product.price}$</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="order_reminder_total-shipping_container">
          <div className="order_reminder_shipping_container">
            <p className="order_reminder_shipping_title">shipping:</p>
            <p className="order_reminder_shipping">{state.shipping}$</p>
          </div>
          <div className="order_reminder_total_container">
            <p className="order_reminder_total_title">Total:</p>
            <p className="order_reminder_total">{state.totalOrder}$</p>
          </div>
        </div>
      </div>
      <div className="order_form_container">
        <form className="order_form" onSubmit={handleSubmit}>
          <div className="order_address">
            <h3>Delivery Address</h3>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="John M. Doe"
              value={state.firstName}
              onChange={handleTextChange}
            ></input>
            <label htmlFor="Lname">Last Name:</label>
            <input
              type="text"
              id="Lname"
              name="lastName"
              placeholder="john@example.com"
              value={state.lastName}
              onChange={handleTextChange}
            ></input>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="addres@gmail.com"
              value={state.email}
              onChange={handleTextChange}
            ></input>
            <label htmlFor="country">Country:</label>
            <select
              name="contry"
              value={state.country}
              onChange={handleTextChange}
            >
              <option>France</option>
              <option>Belgium</option>
              <option>Australia</option>
              <option>Unites States</option>
            </select>
            <label htmlFor="adr">Address</label>
            <input
              type="text"
              id="adr"
              name="address"
              placeholder="542 W. 15th Street"
              value={state.address}
              onChange={handleTextChange}
            ></input>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="New York"
              value={state.city}
              onChange={handleTextChange}
            ></input>
            <label htmlFor="zip">Zip:</label>
            <input
              type="text"
              id="zip"
              name="zip"
              placeholder="10001"
              value={state.zip}
              onChange={handleTextChange}
            ></input>
          </div>
          <div className="order_shipping">
            <h3>Shipping Method</h3>
            <ul>
              <li>
                <label htmlFor="normal">
                  <input
                    id="normal"
                    type="radio"
                    name="shipping"
                    value="0"
                    checked={state.shipping === "0"}
                    onChange={(e) => {
                      handleTextChange(e);
                      changeShipping(e);
                    }}
                  ></input>
                  Normal (free)
                </label>
              </li>
              <li>
                <label htmlFor="express">
                  <input
                    id="express"
                    type="radio"
                    name="shipping"
                    value="5"
                    checked={state.shipping === "5"}
                    onChange={(e) => {
                      handleTextChange(e);
                      changeShipping(e);
                    }}
                  ></input>
                  Express (5$)
                </label>
              </li>
            </ul>
          </div>
          <div className="order_payment">
            <h3>Payment</h3>
            <label htmlFor="fname">Accepted Cards:</label>
            <div className="credit_card_container">
              <i
                className="fa fa-cc-visa"
                style={{ color: "navy", fontSize: "3em" }}
              ></i>
              <i
                className="fa fa-cc-amex"
                style={{ color: "blue", fontSize: "3em", paddingLeft: "0.5em" }}
              ></i>
              <i
                className="fa fa-cc-mastercard"
                style={{ color: "red", fontSize: "3em", paddingLeft: "0.5em" }}
              ></i>
              <i
                className="fa fa-cc-discover"
                style={{
                  color: "orange",
                  fontSize: "3em",
                  paddingLeft: "0.5em",
                }}
              ></i>
            </div>
            <label htmlFor="cname">Name on Card:</label>
            <input
              type="text"
              id="cname"
              name="nameOnCard"
              placeholder="John More Doe"
              value={state.nameOnCard}
              onChange={handleTextChange}
            ></input>
            <label htmlFor="ccnum">Credit card number:</label>
            <input
              type="text"
              id="ccnum"
              name="creditCardNumber"
              placeholder="1111-2222-3333-4444"
              value={state.creditCardNumber}
              onChange={handleTextChange}
            ></input>
            <label htmlFor="expmonth">Exp Month:</label>
            <input
              type="text"
              id="expmonth"
              name="expMonth"
              placeholder="04"
              value={state.expMonth}
              onChange={handleTextChange}
            ></input>
            <label htmlFor="expyear">Exp Year:</label>
            <input
              type="text"
              id="expyear"
              name="expYear"
              placeholder="2018"
              value={state.expYear}
              onChange={handleTextChange}
            ></input>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              placeholder="352"
              value={state.cvv}
              onChange={handleTextChange}
            ></input>
            <button className="order_submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
