import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";
import {
  footerProductLinks,
  footercompanyLinks,
  footerSupportLinks,
} from "../../../stactic/data";
const cx = classNames.bind(styles);
const Footer = () => {
  return (
    <div className={cx("section")}>
      <div className={cx("grid", "wide", "wrap")}>
        <h1 className={cx("heading")}>
          <span>Subcribe</span> us for news <br /> events and offers
        </h1>
        <div className={cx("Subcribe")}>
          <input type="text" required placeholder="Enter your email..." />
          <button>Submit</button>
        </div>
      </div>
      <div className={cx("grid", "wide", "container")}>
        <div className={cx("row")}>
          <div className={cx("col", "c-3")}>
            <ul className={cx("footer-item")}>
              <img src="https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png"></img>
              <p>The home and elements needeed to create beautiful products.</p>
              <div className={cx("social")}>
                <AiFillFacebook className={cx("icon-social")} />
                <AiFillInstagram className={cx("icon-social")} />
                <AiFillYoutube className={cx("icon-social")} />
              </div>
            </ul>
          </div>
          <div className={cx("col", "c-3")}>
            <ul className={cx("footer-list")}>
              <h1>Company</h1>
              {footerProductLinks.map((link) => (
                <li key={link.name}>
                  <Link className={cx("item")} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={cx("col", "c-3")}>
            <ul className={cx("footer-list")}>
              <h1>Shop</h1>
              {footercompanyLinks.map((link) => (
                <li key={link.name}>
                  <Link className={cx("item")} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={cx("col", "c-3")}>
            <ul className={cx("footer-list")}>
              <h1>Support</h1>
              {footerSupportLinks.map((link) => (
                <li key={link.name}>
                  <Link className={cx("item")} to={link.link}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={cx("grid", "wide", "info")}>
        <span>© 2023 - Bản quyền của TBM</span>
      </div>
    </div>
  );
};

export default Footer;
