import React from "react";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer.jsx";
import Contact from "../../components/layouts/Contact/Contact.jsx";
import styles from "./ContactPage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const ContactPage = () => {
  return (
    <div>
      <Header activeHeading={2} />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default ContactPage;
