import React from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Categories.module.scss";
import { brandingData, categoriesData } from "../../../stactic/data";
const cx = classNames.bind(styles);
const Categories = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={cx("section", "grid", "wide")}>
        <div className={cx("customer")}>
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
        <div className={cx("homeCartegory")} id="category">
          <div className={cx("row")}>
            {categoriesData &&
              categoriesData.map((i) => {
                const handleSubmit = (i) => {
                  navigate(`/products?category=${i.title}`);
                };
                return (
                  <div className={cx("c-2", "m-3", "l-6")}>
                    <div
                      className={cx("category-item")}
                      key={i.id}
                      onClick={() => handleSubmit(i)}
                    >
                      <img src={i.image_Url}></img>
                      <h5>{i.title}</h5>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
