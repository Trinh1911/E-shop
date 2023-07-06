import React from "react";
import classNames from "classnames/bind";
import styles from "./Categories.module.scss";
import { brandingData } from "../../../stactic/data";
const cx = classNames.bind(styles);
const Categories = () => {
  return (
    <>
      <div className={cx("section")}>
        <div className={cx("wrapper")}>
          {brandingData &&
            brandingData.map((i, index) => (
              <div className={cx("category")} key={index}>
                {i.icon}
                <div className={cx("category-item")}>
                  <h3>{i.title}</h3>
                  <p>{i.Description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
