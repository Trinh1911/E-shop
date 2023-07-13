import React, { useState, useEffect } from "react";
import Header from "../../components/layouts/Header/Header";
import { productData } from "../../stactic/data";
import ProductCart from "../../components/layouts/ProductCart/ProductCart";
import classNames from "classnames/bind";
import styles from "./BestSellingPage.module.scss";
const cx = classNames.bind(styles);
const BestSellingPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => b.total_sell - a.total_sell);
    setData(d);
  }, []);

  return (
    <div>
      <Header activeHeading={2} />
      <div className={cx("grid", "wide", "section")}>
        <div className={cx("row")}>
          {data && data.map((i, index) => <ProductCart data={i} key={index} />)}
        </div>
      </div>
    </div>
  );
};

export default BestSellingPage;
