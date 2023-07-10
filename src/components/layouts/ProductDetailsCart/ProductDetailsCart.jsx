import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { AiOutlineMessage } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./ProductDetailsCart.module.scss";
const cx = classNames.bind(styles);
const ProductDetailsCart = ({ setOpen, data }) => {
  const [count, setCount] = useState(1);
  const [click, setClick] = useState(false);
  const handleMessageSubmit = () => {};
  const percent = ((data.discount_price * 100) / data.price).toFixed(2);
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
              <div className={cx("container")}>
                <div className={cx("content")}>
                  <img
                    src={data.image_Url[0].url}
                    alt=""
                    className={cx("img")}
                  ></img>
                  <div className={cx("user-shop")}>
                    <img
                      src={data.shop.shop_avatar.url}
                      alt=""
                      className={cx("avt")}
                    ></img>
                    <div className={cx("user-detail")}>
                      <h3>{data.shop.name}</h3>
                      <h5>{data.shop.ratings} Ratings</h5>
                    </div>
                  </div>
                  <div
                    className={cx("button-message")}
                    onClick={handleMessageSubmit}
                  >
                    <AiOutlineMessage className={cx("icon-message")} />
                    <span>Send Message</span>
                  </div>
                </div>
                <div className={cx("ProductDetail")}>
                  <div className={cx("info")}>
                    <h1 className={cx("heading")}>{data.name}</h1>
                    <p>{data.description}</p>
                  </div>
                  <div className={cx('price')}>
                    <div className={cx('current-price')}>{data.discount_price}$</div>
                    <div className={cx('total-price')}>{data.price ? data.price + "$" : null}</div>
                    <span className={cx('discount-rate')}>{data.price ? "-" + percent + "%" : null}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ProductDetailsCart;
