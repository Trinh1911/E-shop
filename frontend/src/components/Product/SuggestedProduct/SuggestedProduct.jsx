import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./SuggestedProduct.module.scss";
import { productData } from "../../../stactic/data";
import ProductCard from "../../layouts/ProductCart/ProductCart.jsx";
const cx = classNames.bind(styles);
const SuggestedProduct = ({ data }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    const d =
      productData && productData.filter((i) => i.category === data.category);
    setProducts(d);
  }, []);

  return (
    <div>
      {data ? (
        <div className={cx("grid", "wide", "section")}>
          <h2 className={cx("heading")}>Related Product</h2>
          <div className={cx("section")}>
            <div className={cx("row")}>
              {products &&
                products.map((i, index) => (
                  <ProductCard data={i} key={index} />
                ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SuggestedProduct;
