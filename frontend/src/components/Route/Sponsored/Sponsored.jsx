import React from "react";
import classNames from "classnames/bind";
import styles from "./Sponsored.module.scss";
const cx = classNames.bind(styles)
const Sponsored = () => {
  return <div className={cx("grid","wide","section")}>
    <div className={cx('row')}>
        <div className={cx('col',"c-3")}>
            <img className={cx('img')} src="https://logos-world.net/wp-content/uploads/2020/04/Sony-Logo.png" alt=""></img>
        </div>
        <div className={cx('col',"c-3")}>
            <img className={cx('img')} src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png" alt=""></img>
        </div>
        <div className={cx('col',"c-3")}>
            <img className={cx('img')} src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png" alt=""></img>
        </div>
        <div className={cx('col',"c-3")}>
            <img className={cx('img')} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/LG_logo_%282015%29.svg/2560px-LG_logo_%282015%29.svg.png" alt=""></img>
        </div>
    </div>
  </div>;
};

export default Sponsored;
