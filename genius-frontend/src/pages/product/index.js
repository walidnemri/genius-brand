import "./style.css";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../../components/navbar";
import { bagContext } from "../../Context";

const Product = () => {
  const { bagOrder, setBagOrder } = useContext(bagContext);

  const [selectValue, setSelectValue] = useState("");
  const [inputValue, setInputValue] = useState("1");
  const [pictureSelect, setPictureSelect] = useState(
    "https://cdn.yoox.biz/41/41968007sg_11_f.jpg"
  );
  const [isHoverLess, setIsHoverLess] = useState(false);
  const [isHoverPlus, setIsHoverPlus] = useState(false);
  const [product, setProduct] = useState();
  const { id } = useParams();

  const pictureProduct = [
    "https://cdn.yoox.biz/41/41968007sg_11_f.jpg",
    "https://cdn.yoox.biz/41/41968007sg_11_r.jpg",
    "https://cdn.yoox.biz/41/41968007sg_11_e.jpg",
    "https://cdn.yoox.biz/41/41968007sg_11_d.jpg",
    "https://cdn.yoox.biz/41/41968007sg_11_b.jpg",
  ];

  const getProduct = async () => {
    let data;
    try {
      data = await axios.get(`http://localhost:3002/api/products/${id}`);
    } catch (err) {
      console.log(err);
    }
    if (data) setProduct(data.data.product);
  };

  useEffect(() => {
    getProduct();
  }, []);

  const handleChangeSelectValue = (e) => {
    setSelectValue(e.target.value);
  };
  const handleChangeInputValue = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    selectValue === "" || selectValue === "Select Size"
      ? window.alert("Please select a size")
      : isSizeIsSelect();
  };

  const isSizeIsSelect = () => {
    if (product) {
      const infoProduct = {
        id,
        name: product.name,
        price: product.price,
        quantity: inputValue,
        size: selectValue,
      };
      window.alert("product add in the bag");
      setBagOrder((prevState) => {
        console.log(prevState);
        return [...prevState, infoProduct];
      });
      console.log(bagOrder);
    }
  };

  return product ? (
    <>
      <Navbar pageActive={"e-shop"} />
      <div className="product">
        <div className="picture_container">
          <div
            className="principal_picture"
            style={{ backgroundImage: `url(${pictureSelect})` }}
          ></div>
          <ul className="picture_selection">
            {pictureProduct.map((e, i) => (
              <li
                className={
                  pictureSelect === e
                    ? "picture_selection_unique_hover picture_selection_unique"
                    : "picture_selection_unique"
                }
                key={i}
                style={{ backgroundImage: `url(${e})` }}
                onClick={() => {
                  setPictureSelect(e);
                }}
              ></li>
            ))}
          </ul>
        </div>
        <div className="content-form_container">
          <div className="content-form_position">
            <div className="collection">COLLECTION 20 SPRING</div>
            <div className="product_name">{product.name.toUpperCase()}</div>
            <div className="product_price">{`€${product.price}`}</div>
            <div className="product_description">
              Long sleeves black denim jacket with a twisted design. Contrast
              stitching. Button up closure. White arrow prints on the back.
            </div>
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
                      max="10"
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
                            if (parsed < 10) {
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
              <button
                className="button_submit"
                onClick={(e) => handleSubmit(e)}
              >
                {selectValue === "" || selectValue === "Select Size"
                  ? "CHOOSE SIZE"
                  : "ADD TO CART"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div> nothing</div>
  );
};

export default Product;
