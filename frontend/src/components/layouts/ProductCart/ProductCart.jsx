import React, { useState } from "react";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillStar,
  AiOutlineEye,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import ProductDetailsCart from "../ProductDetailsCart/ProductDetailsCart";
import classNames from "classnames/bind";
import styles from "./ProductCart.module.scss";
const cx = classNames.bind(styles);
const ProductCart = ({ data }) => {
  const [click, setClick] = useState(false);
  const [open, setOpen] = useState(false);
  const d = data.name;
  const product_name = d.replace(/\s+/g, "-");
  const percent = ((data.discount_price * 100) / data.price).toFixed(2);
  return (
    <div className={cx("col","l-2", "product-item")}>
      <Link to={`/product/${product_name}`}>
        <img src={data.image_Url[0].url}></img>
      </Link>
      <Link to="/" className={cx("td")}>
        <h5>{data.shop.name}</h5>
      </Link>
      <Link to={`/product/${product_name}`} className={cx("td")}>
        <h4>{data.name}</h4>
        <div className={cx("product-action")}>
          <div className={cx("product-like")}>
            <div className={cx("product-rating")}>{data.rating}</div>
            <AiFillStar className={cx("icon-start")} />
          </div>
          <div className={cx("product-sold")}>{data.total_sell} sold</div>
        </div>
        <div className={cx("product-price")}>
          <del>{data.price ? data.price + "$" : null}</del>
          <div>
            {data.discount_price}$
            <span>{data.price ? "-" + percent + "%" : null}</span>
          </div>
        </div>
      </Link>
      {/* side options */}
      <div>
        {/* like */}
        {click ? (
          <AiFillHeart
            className={cx("icon-like", `${click ? "active" : "normal"}`)}
            onClick={() => setClick(!click)}
            title="Remove from wishlist"
          />
        ) : (
          <AiOutlineHeart
            className={cx("icon-like", `${click ? "active" : "normal"}`)}
            onClick={() => setClick(!click)}
            title="Add from wishlist"
          />
        )}
        {/* eyes */}
        <AiOutlineEye
          className={cx("icon-eyes")}
          onClick={() => setOpen(!open)}
          title="Quick view"
        />
        <AiOutlineShoppingCart
          className={cx("icon-cart")}
          onClick={() => setOpen(!open)}
          title="Add to cart"
        />
        {open ? <ProductDetailsCart setOpen={setOpen} data={data} /> : null}
      </div>
    </div>
  );
};

export default ProductCart;
