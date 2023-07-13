import React from "react";
import classNames from "classnames/bind";
import styles from "./Slider.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

const Slider = () => {
  return (
    <div className={cx("section")}>
      <div className={cx("wrap")}>
        <h1>
          Best Collection for <br /> home Decoration
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nemo
          eaque animi tenetur ducimus, obcaecati nisi. Animi, optio eaque. Iure?
        </p>
        <Link className={cx("tdn")} to="/products">
          <div className={cx("button")}>Shop now</div>
        </Link>
      </div>
    </div>
  );
};

export default Slider;
