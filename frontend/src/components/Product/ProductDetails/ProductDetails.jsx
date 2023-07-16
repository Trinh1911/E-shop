import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineMessage,
} from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./ProductDetails.module.scss";
const cx = classNames.bind(styles);
const ProductDetails = ({ data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  const handleMessageSubmit = () => {};
  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className={cx("section")}>
      {data ? (
        <div className={cx("container")}>
          <div className={cx("content", "grid", "wide")}>
            <div className={cx("row")}>
              <div className={cx("col", "l-4")}>
                <img
                  src={data.image_Url[select].url}
                  alt=""
                  className={cx("product-img")}
                ></img>
                <div className={cx("box")}>
                  <img
                    src={data?.image_Url[0].url}
                    alt=""
                    className={cx("product-img-item")}
                    onClick={() => setSelect(0)}
                  />
                  <img
                    src={data?.image_Url[1].url}
                    alt=""
                    className={cx("product-img-item")}
                    onClick={() => setSelect(1)}
                  />
                </div>
              </div>
              <div className={cx("col", "l-8")}>
                <div className={cx("row", "info-user")}>
                  <div className={cx("col", "l-8", "info")}>
                    <h1 className={cx("heading")}>{data.name}</h1>
                    <p>{data.description}</p>
                  </div>
                  <div className={cx("col", "l-4", "shop")}>
                    <Link to="/" className={cx("user-shop")}>
                      <img
                        src={data.shop.shop_avatar.url}
                        alt=""
                        className={cx("avt")}
                      ></img>
                      <div className={cx("user-detail")}>
                        <h3>{data.shop.name}</h3>
                        <h5>{data.shop.ratings} Ratings</h5>
                      </div>
                    </Link>
                    <div
                      className={cx("button-message")}
                      onClick={handleMessageSubmit}
                    >
                      <AiOutlineMessage className={cx("icon-message")} />
                      <span>Send Message</span>
                    </div>
                  </div>
                </div>
                <div className={cx("info-product")}>
                  <div className={cx("price")}>
                    <div className={cx("current-price")}>
                      {data.discount_price}$
                    </div>
                    <div className={cx("total-price")}>
                      {data.price ? data.price + "$" : null}
                    </div>
                    <span className={cx("discount-rate")}>
                      {data.price
                        ? "-" +
                          ((data.discount_price * 100) / data.price).toFixed(
                            2
                          ) +
                          "%"
                        : null}
                    </span>
                  </div>
                  <div className={cx("quantity")}>
                    <AiOutlineMinus
                      className={cx("icon-quantity")}
                      onClick={decrementCount}
                    />
                    <span>{count}</span>
                    <AiOutlinePlus
                      className={cx("icon-quantity")}
                      onClick={incrementCount}
                    />
                  </div>
                  <div className={cx("add-cart")}>
                    <AiOutlineShoppingCart className={cx("icon-cart")} /> Add to
                    cart
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className={cx("grid", "wide")}>
            <ProductDetailsInfo data={data} />
            <br />
            <br />
          </div>
        </div>
      ) : null}
    </div>
  );
};
const ProductDetailsInfo = ({ data }) => {
  const [active, setActive] = useState(1);
  return (
    <div className={cx("details-description")}>
      <div className={cx("title")}>
        <div className={cx("description-heading")}>
          <h5
            onClick={() => setActive(1)}
            className={cx(`${active === 1 ? "active-indicator" : null}`)}
          >
            Product Details
          </h5>
        </div>
        <div className={cx("description-heading")}>
          <h5
            onClick={() => setActive(2)}
            className={cx(`${active === 2 ? "active-indicator" : null}`)}
          >
            Product Reviews
          </h5>
        </div>
      </div>
      {active === 1 ? (
        <>
          <p className={cx("description")}>{data.description}</p>
          <p className={cx("description")}>{data.description}</p>
          <p className={cx("description")}>{data.description}</p>
        </>
      ) : null}
      {
        active === 2 ? (
          <p className={cx("description")}>No Review yet!</p>
        ) : null
      }
    </div>
  );
};

export default ProductDetails;
