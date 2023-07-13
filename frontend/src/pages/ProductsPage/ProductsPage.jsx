import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/layouts/Header/Header";
import { productData } from "../../stactic/data";
import ProductCart from "../../components/layouts/ProductCart/ProductCart";
import classNames from "classnames/bind";
import styles from "./ProductsPage.module.scss";
const cx = classNames.bind(styles);
const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);
  useEffect(() => {
    if (categoryData === null) {
      const d =
        productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(d);
    } else {
      const d =
        productData && productData.filter((i) => i.category === categoryData);
      setData(d);
    }
  }, []);

  return (
    <div>
      <Header activeHeading={3} />
      <div className={cx("grid", "wide", "section")}>
        <div className={cx('row')}>{data && data.map((i, index) => <ProductCart data={i} key={index} />)}</div>
        <div className={cx('not-found')}>{data && data.length === 0 ? <h1> No products Found!</h1> : null}</div>
      </div>
    </div>
  );
};

export default ProductsPage;
