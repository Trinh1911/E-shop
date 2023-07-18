import { React, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
const cx = classNames.bind(styles);
const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Visible, setVisible] = useState(false);
  return (
    <div className={cx("container")}>
      <div className={cx("inner")}>
        <h2 className={cx("header")}>Login to your account</h2>
      </div>
      <div className={cx("container-form")}>
        <div className={cx("inner-form")}>
          <form className={cx("form")}>
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
                  value={Email}
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
                  type={Visible ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  required
                  value={Password}
                  placeholder="Type your password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                {Visible ? (
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

export default Login;