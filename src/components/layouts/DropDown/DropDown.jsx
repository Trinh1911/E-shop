import React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./DropDown.module.scss";
const cx = classNames.bind(styles);
const DropDown = ({ categoriesData, setDropDown }) => {
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    setDropDown(false);
    window.location.reload();
  };
  return (
    <div className={cx("dropdown")}>
      {categoriesData &&
        categoriesData.map((i, index) => (
          <div className={cx('product')}>
            <div
              key={index}
              className={cx("wrapper")}
              onClick={() => submitHandle(i)}
            />
            <img src={i.image_Url} className={cx("image")} alt="" />
            <h3 className={cx("name")}>{i.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;
