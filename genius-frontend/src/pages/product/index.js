import "./style.css";
import { useState } from "react";
import axios from "axios";
import arrow from "../../assets/arrow.png";
import lb1 from "../../assets/lookbook/lb1.jpg";
import lb2 from "../../assets/lookbook/lb2.jpg";
import lb3 from "../../assets/lookbook/lb3.jpg";
import lb4 from "../../assets/lookbook/lb4.jpg";
import lb5 from "../../assets/lookbook/lb5.jpg";

const product = {
  name: "black hoodie special edition",
  price: 120,
  description:
    "Long sleeves black denim jacket with a twisted design. Contrast stitching. Button up closure. White arrow prints on the back.",
  stock: 2,
};

const Product = () => {
  const [selectValue, setSelectValue] = useState("");
  const [inputValue, setInputValue] = useState("1");
  const [pictureSelect, setPictureSelect] = useState(lb1);
  const [isHoverLess, setIsHoverLess] = useState(false);
  const [isHoverPlus, setIsHoverPlus] = useState(false);

  const pictureProduct = [lb1, lb2, lb3, lb4, lb5, lb1, lb2, lb3, lb4, lb5];
  const { name, price, description, stock } = product;

  const handleChangeSelectValue = (e) => {
    setSelectValue(e.target.value);
  };
  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    const infoProduct = {
      quantity: selectValue,
      size: inputValue,
    };
    console.log(infoProduct);
    // axios.post("mettre l'url", infoProduct).then((res) => {
    //   console.log(res.data);
    // });
  };
  return (
    <div className="product">
      <div className="picture_container">
        <div
          className="principal_picture"
          style={{ backgroundImage: `url(${pictureSelect})` }}
        ></div>
        <div className="picture_selection">
          {pictureProduct.map((e, i) => (
            <div
              className="picture_selection_unique"
              key={i}
              style={{ backgroundImage: `url(${e})` }}
              onClick={() => setPictureSelect(e)}
            ></div>
          ))}
        </div>
      </div>
      <div className="content-form_container">
        <div className="content-form_position">
          <div className="collection">COLLECTION 20 SPRING</div>
          <div className="product_name">{name.toUpperCase()}</div>
          <div className="product_price">{`€${price}`}</div>
          <div className="product_description">{description}</div>
          <form className="form_container" onSubmit={handleSubmit}>
            <div className="under_form_container">
              <div className="form_selector_container">
                <label className="select_name" htmlFor="SizeSelector">
                  SIZE:
                </label>
                <select
                  className="select"
                  id="SizeSelector"
                  name="size"
                  value={selectValue}
                  onChange={handleChangeSelectValue}
                >
                  <option>Select Size</option>
                  <option value="XS">XS</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="L">L</option>
                  <option value="XL">XL</option>
                  <option value="XXL">XXL</option>
                </select>
              </div>
              <div className="input_container">
                <label className="input_name" htmlFor="Quantity">
                  QTY:
                </label>
                <div className="input_adj_container">
                  <input
                    className="input"
                    id="Quantity"
                    type="number"
                    name="quantity"
                    value={inputValue}
                    onChange={handleChangeInputValue}
                    min="1"
                    max="100"
                  ></input>
                  <div className="value_adj">
                    <div
                      onMouseOver={() => setIsHoverLess(true)}
                      onMouseLeave={() => setIsHoverLess(false)}
                      className="input_less_container"
                      role="button"
                      onClick={() =>
                        setInputValue((prevValue) => {
                          let parsed = parseInt(prevValue);
                          if (parsed > 1) {
                            parsed--;
                          }
                          return parsed.toString();
                        })
                      }
                    >
                      <div
                        className="input_less"
                        style={{
                          backgroundColor: isHoverLess ? "white" : "#7d31c7",
                        }}
                      ></div>
                    </div>
                    <div
                      onMouseOver={() => setIsHoverPlus(true)}
                      onMouseLeave={() => setIsHoverPlus(false)}
                      className="input_plus_container"
                      onClick={() =>
                        setInputValue((prevValue) => {
                          let parsed = parseInt(prevValue);
                          if (parsed < 100) {
                            parsed++;
                          }
                          return parsed.toString();
                        })
                      }
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
                </div>
              </div>
            </div>
            <button className="button_submit">
              {selectValue === "" || selectValue === "Select Size"
                ? "CHOOSE SIZE"
                : "ADD TO CART"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Product;
