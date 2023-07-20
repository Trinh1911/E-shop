import React from "react";
import styles from "./Contact.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const Contact = () => {
  return (
    <div className={cx("section", "grid", "wide")}>
      <h1 className={cx("heading")}>
        <span>contact</span> us
      </h1>
      <div className={cx("row", "sm-gutter")}>
        <div className={cx("col", "l-6", "m-6", "c-12")}>
          <div className={cx('wrap-map')}>
            <iframe
              className={cx("map")}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30153.788252261566!2d72.82321484621745!3d19.141690214227783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63aceef0c69%3A0x2aa80cf2287dfa3b!2sJogeshwari%20West%2C%20Mumbai%2C%20Maharashtra%20400047!5e0!3m2!1sen!2sin!4v1632137920043!5m2!1sen!2sin"
              allowfullscreen=""
              width="600"
              height="450"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className={cx("col", "l-6", "m-6", "c-12")}>
          <form action="">
            <h3>Get In Touch</h3>
            <input type="text" placeholder="your name" className={cx("box")} />
            <input
              type="email"
              placeholder="your email"
              className={cx("box")}
            />
            <textarea
              placeholder="your message"
              className={cx("box")}
              cols="30"
              rows="10"
            ></textarea>
            <input
              type="submit"
              value="Send message"
              className={cx("button")}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
