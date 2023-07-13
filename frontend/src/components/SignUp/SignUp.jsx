import { React, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import classNames from "classnames/bind";
import styles from "./SignUp.module.scss";
import { sever } from "../../Sever";
const cx = classNames.bind(styles);
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const handleSubmit = async (e) => {
    const config = { headers: { "Content-Type": "multipart/form-data" } };
    const newForm = new FormData();
    newForm.append("file", avatar);
    newForm.append("name", name);
    newForm.append("email", email);
    newForm.append("password", password);
    axios
      .post(`${sever}/user/create-user`, newForm, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };
  return (
    <div className={cx("container")}>
      <div className={cx("inner")}>
        <h2 className={cx("header")}>Register as a new user</h2>
      </div>
      <div className={cx("container-form")}>
        <div className={cx("inner-form")}>
          <form className={cx("form")} onSubmit={handleSubmit}>
            <div>
              <label className={cx("label-login")} htmlFor="email">
                Fullname
              </label>
              <div className={cx("form-login")}>
                <input
                  className={cx("input-login")}
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={name}
                  placeholder="Type email address"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
            </div>
            <div className={cx("mt-10")}>
              <label className={cx("label-login")} htmlFor="email">
                Email
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
                Password
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
            <label htmlFor="avatar" className={cx("avatar")}>
              <div className={cx("wrap-up")}>
                <span>
                  {avatar ? (
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="avatar"
                      className={cx("img-avatar")}
                    />
                  ) : (
                    <RxAvatar className={cx("avatar-icon")} />
                  )}
                </span>
                <label htmlFor="input-file" className={cx("input-file")}>
                  <span>Up load file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="input-file"
                    accept=".png,.jpeg,.jpg"
                    onChange={handleFileInputChange}
                    className={cx("input-file-avatar")}
                  />
                </label>
              </div>
            </label>
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
              <button className={cx("btn-large")}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
