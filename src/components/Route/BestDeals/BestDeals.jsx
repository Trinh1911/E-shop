import { useEffect, useState } from "react";
import { productData } from "../../../stactic/data";
import ProductCart from "../../layouts/ProductCart/ProductCart";
import CountDown from "../../layouts/CountDown/CountDown.jsx"
import classNames from "classnames/bind";
import styles from "./BestDeals.module.scss";
const cx = classNames.bind(styles);
const BestDeals = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const d =
      productData && productData.sort((a, b) => a.total_sell - b.total_sell);
    const firstFive = d.slice(0, 6);
    setData(firstFive);
  }, []);
  return (
    <div className={cx("section", "grid", "wide")}>
      <div className={cx("heading")}>
        <h1>Good Price Today</h1>
        <CountDown/>
      </div>
      <div className={cx("home-deal", "row")}>
        {data &&
          data.map((i, index) => (
            <ProductCart data={i} key={index} />
          ))}
      </div>
    </div>
  );
};

export default BestDeals;
