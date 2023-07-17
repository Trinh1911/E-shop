import React, { useState } from "react";
import { RxPerson } from "react-icons/rx";
import { AiOutlineMessage, AiOutlineCreditCard, AiOutlineLogin } from "react-icons/ai";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import { TbAddressBook } from "react-icons/tb";
import { MdOutlineTrackChanges } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./ProfileSidebar.module.scss";
const cx = classNames.bind(styles);
const ProfileSidebar = ({ active, setActive }) => {
  const navigate = useNavigate();
  return (
    <div className={cx("profile-sidebar")}>
      <div className={cx("wrap")} onClick={() => setActive(1)}>
        <RxPerson
          className={cx("icon-profile", `${active === 1 ? "active" : ""}`)}
        />
        <span className={cx(`${active === 1 ? "active" : ""}`)}>Profile</span>
      </div>
      <div className={cx("wrap")} onClick={() => setActive(2)}>
        <HiOutlineShoppingBag
          className={cx("icon-profile", `${active === 2 ? "active" : ""}`)}
        />
        <span className={cx(`${active === 2 ? "active" : ""}`)}>Oders</span>
      </div>
      <div className={cx("wrap")} onClick={() => setActive(3)}>
        <HiOutlineReceiptRefund
          className={cx("icon-profile", `${active === 3 ? "active" : ""}`)}
        />
        <span className={cx(`${active === 3 ? "active" : ""}`)}>Refunds</span>
      </div>
      <div className={cx("wrap")} onClick={() => setActive(4) || navigate("/inbox")}
      >
        <AiOutlineMessage
          className={cx("icon-profile", `${active === 4 ? "active" : ""}`)}
        />
        <span className={cx(`${active === 4 ? "active" : ""}`)}>Inbox</span>
      </div>
      <div className={cx("wrap")} onClick={() => setActive(5)}>
        <MdOutlineTrackChanges
          className={cx("icon-profile", `${active === 5 ? "active" : ""}`)}
        />
        <span className={cx(`${active === 5 ? "active" : ""}`)}>
          Track Order
        </span>
      </div>
      <div className={cx("wrap")} onClick={() => setActive(6)}>
        <AiOutlineCreditCard
          className={cx("icon-profile", `${active === 6 ? "active" : ""}`)}
        />
        <span className={cx(`${active === 6 ? "active" : ""}`)}>
          Payment Methods
        </span>
      </div>
      <div className={cx("wrap")} onClick={() => setActive(7)}>
        <TbAddressBook
          className={cx("icon-profile", `${active === 7 ? "active" : ""}`)}
        />
        <span className={cx(`${active === 7 ? "active" : ""}`)}>
          Address
        </span>
      </div>
      <div className={cx("wrap")} onClick={() => setActive(8)}>
        <AiOutlineLogin
          className={cx("icon-profile", `${active === 8 ? "active" : ""}`)}
        />
        <span className={cx(`${active === 8 ? "active" : ""}`)}>
          Address
        </span>
      </div>
    </div>
  );
};

export default ProfileSidebar;
