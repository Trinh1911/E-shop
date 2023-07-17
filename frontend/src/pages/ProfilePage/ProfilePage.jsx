import React, { useState } from "react";
import Header from "../../components/layouts/Header/Header.jsx";
import ProfileSidebar from "../../Profile/ProfileSidebar/ProfileSidebar.jsx";
import ProfileContent from "../../Profile/ProfileContent/ProfileContent.jsx";
import classNames from "classnames/bind";
import styles from "./ProfilePage.module.scss";
const cx = classNames.bind(styles);
const ProfilePage = () => {
  const [active, setActive] = useState(1);
  return (
    <div>
      <Header />
      <div className={cx("grid", "wide", "section")}>
        <div className={cx("wrap")}>
          <ProfileSidebar active={active} setActive={setActive} />
        </div>
        <ProfileContent active={active} setActive={setActive} />
      </div>
    </div>
  );
};

export default ProfilePage;
