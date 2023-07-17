import React from "react";
import { AiOutlineCamera } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./ProfileContent.module.scss";
const cx = classNames.bind(styles);
const ProfileContent = ({ active }) => {
  return (
    <div className={cx("section")}>
      {active === 1 && (
        <div className={cx("wrap")}>
          <div className={cx("user")}>
            <img
              src="https://s120-ava-talk.zadn.vn/1/f/2/6/7/120/57c9903cb27b75ace0f8de42bee3f4cc.jpg"
              className={cx("avatar")}
            />
            <AiOutlineCamera className={cx("icon-camera")} />
          </div>
          <br/>
          <div className={cx("contact")}>
            <form>
              <div className={cx('contact-form')}>
                <label htmlFor="">Full Name</label>
                <input type="text" required/>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileContent;
