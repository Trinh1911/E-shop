import { React, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./ShopCreate.module.scss";
const cx = classNames.bind(styles);
const ShopCreate = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [zipCode, setZipCode] = useState();
  const [phoneNumber, setphoneNumber] = useState();
  const [avtatar, setAvatar] = useState();
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  return (
    <div className={cx("container")}>
      <div className={cx("inner")}>
        <h2 className={cx("header")}>Resgister as a seller</h2>
      </div>
      <div className={cx("container-form")}>
        <div className={cx("inner-form")}>
          <form className={cx("form")}>
          <div>
              <label className={cx("label-login")} htmlFor="name">
                Shop Name
              </label>
              <div className={cx("form-login")}>
                <input
                  className={cx("input-login")}
                  type="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
            </div>
            <div>
              <label className={cx("label-login")} htmlFor="email">
                Email address
              </label>
              <div className={cx("form-login")}>
                <input
                  className={cx("input-login")}
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  placeholder="Type email address"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
            </div>
            <div className={cx("mt-10")}>
              <label className={cx("label-login")} htmlFor="password">
                Type your password
              </label>
              <div className={cx("form-login")}>
                <input
                  className={cx("input-login")}
                  type={visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  placeholder="Type your password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                {visible ? (
                  <AiOutlineEye
                    size={25}
                    className={cx("icon-eyes")}
                    onClick={() => setVisible(false)}
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    size={25}
                    className={cx("icon-eyes")}
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>
            <div className={cx("form-submit")}>
              <div className={cx("memorize")}>
                <input
                  type="checkbox"
                  name="remember-me"
                  id="remember-me"
                  className={cx("checkbox")}
                />
                <label htmlFor="remember-me" className={cx("text-re")}>
                  Remember me
                </label>
              </div>
              <a className={cx("forgot")} href="#">
                Forgot on me
              </a>
              <button className={cx("btn-large")}>Submit</button>
            </div>
            <div className={cx("sign-up")}>
              <h4>Not have any account</h4>
              <Link to="/sign-up" className={cx("signUp-link")}>Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShopCreate;