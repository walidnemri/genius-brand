import "./style.css";
import { useReducer } from "react";
import Bag from "../../components/bag_for_order";

const Order = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    contry: "",
    address: "",
    city: "",
    zip: "",
    shipping: "normal",
    nameOnCard: "",
    creditCardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
    shippingPrice: 0,
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

  const bag = [1, 2];
  return (
    <div className="order_container">
      <div className="order_bag_container">
        <h3>ORDER</h3>
        {bag.map((e, i) => {
          return (
            <div key={i}>
              <img alt="product_picture" src="" />
              <div>
                <p></p>
                <div>
                  <p>Size:</p>
                  <p>{}</p>
                </div>
              </div>
              <div>
                <p></p>
              </div>
              <div>
                <p></p>
              </div>
              <div>
                <p></p>
              </div>
            </div>
          );
        })}
        <div>
          <p>shipping:</p>
          <p>{state.shippingPrice}</p>
        </div>
        <div>
          <p>Total:</p>
          <p>{state.totalOrder}</p>
        </div>
      </div>
      <div className="order_form_container">
        <form className="order_form">
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
                    value="normal"
                    checked={state.shipping === "normal"}
                    onChange={handleTextChange}
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
                    value="express"
                    checked={state.shipping === "express"}
                    onChange={handleTextChange}
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
              placeholder="September"
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
          </div>
        </form>
      </div>
    </div>
  );
};

export default Order;
