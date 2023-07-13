import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { BsHandbag } from "react-icons/bs";
import { HiPlus, HiOutlineMinus } from "react-icons/hi";
import classNames from "classnames/bind";
import styles from "./Cart.module.scss";
const cx = classNames.bind(styles);
const Cart = ({ setOpen }) => {
  const cartData = [
    {
      name: "Kem Chống Nắng Kiểm Soát Nhờn Không Màu La Roche-Posay Anthelios Xl Spf50+ Uvb & Uva 50Ml",
      description: "test",
      price: 999,
    },
    {
      name: "Kem Chống Nắng Kiểm Soát Nhờn Không Màu La Roche-Posay Anthelios Xl Spf50+ Uvb & Uva 50Ml",
      description: "test",
      price: 255,
    },
    {
      name: "Kem Chống Nắng Kiểm Soát Nhờn Không Màu La Roche-Posay Anthelios Xl Spf50+ Uvb & Uva 50Ml",
      description: "test",
      price: 645,
    },
  ];
  return (
    <div className={cx("section")}>
      <div className={cx("modal")}>
        <div className={cx("wrap")}>
          <RxCross1
            className={cx("icon-close")}
            onClick={() => setOpen(false)}
          />
          <div className={cx("list-item")}>
            <div className={cx("heading")}>
              <BsHandbag className={cx("icon-bag")} />
              <h5 className={cx("heading-text")}>3 items</h5>
            </div>
            <div className={cx("container")}>
              {cartData &&
                cartData.map((i, index) => <CartSingle key={index} data={i} />)}
            </div>
          </div>
          <div className={cx("total")}>
            <Link to="/checkout">
              <div className={cx("checkout")}>Checkout Now</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
const CartSingle = ({ data }) => {
  const [value, setValue] = useState(1);
  const totalPrice = data.price * value;
  return (
    <div className={cx("item")}>
      <div className={cx("item-img")}>
        <img
          src="https://product.hstatic.net/200000061028/product/x-3016733_ac8da780d1c541ef9838c8348109a99a_small.jpg"
          alt=""
          className={cx("img-item")}
        ></img>
      </div>
      <div className={cx("item-wrap")}>
        <div className={cx("item-title")}>
          <h2>{data.name}</h2>
        </div>
        <div className={cx("quantity")}>
          <>
            <HiOutlineMinus
              className={cx("quantity-icon")}
              onClick={() => setValue(value === 1 ? 1 : value - 1)}
            />
            <span className={cx("value")}>{value}</span>
            <HiPlus
              className={cx("quantity-icon")}
              onClick={() => setValue(value + 1)}
            />
          </>
          <div className={cx("price")}>{totalPrice}</div>
        </div>
        <RxCross1 className={cx("close-item")} />
      </div>
    </div>
  );
};

export default Cart;
