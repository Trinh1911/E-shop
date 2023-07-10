import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import classNames from "classnames/bind";
import styles from "./ProductDetailsCart.module.scss";
const cx = classNames.bind(styles);
const ProductDetailsCart = ({ setOpen, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  return (
    <>
      <div className={cx("section")}>
        {data ? (
          <div className={cx("modal")}>
            <div className={cx("wrap")}>
              <RxCross1
                className={cx("icon-close")}
                onClick={() => setOpen(false)}
              />
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ProductDetailsCart;
