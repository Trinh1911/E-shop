import React from "react";
import Footer from "../../components/layouts/Footer/Footer.jsx";
import Header from "../../components/layouts/Header/Header.jsx";
import Lottie from "react-lottie";
import animationData from "../../Assets/animations/107043-success.json";
import classNames from "classnames/bind";
import styles from "./OrderSuccessPage.module.scss";
const cx = classNames.bind(styles);
const OrderSuccessPage = () => {
  return (
    <div>
      <Header />
      <Success />
      <Footer />
    </div>
  );
};

const Success = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} width={300} height={300} />
      <h5 className={cx("wrap")}>Your order is successful 😍</h5>
      <br />
      <br />
    </div>
  );
};

export default OrderSuccessPage;
