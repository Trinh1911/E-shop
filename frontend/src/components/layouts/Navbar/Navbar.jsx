import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import { navItems } from "../../../stactic/data";
import styles from "./Navbar.module.scss";
const cx = classNames.bind(styles);
const Navbar = ({ active }) => {
  return (
    <div className={cx("section")}>
      {navItems &&
        navItems.map((i, index) => (
          <div className={cx("wrap")}>
            <Link
              to={i.url}
              className={cx(
                `${active === index + 1 ? "active" : "normal"}`,
                "nav-item"
              )}
            >
              {i.title}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Navbar;
