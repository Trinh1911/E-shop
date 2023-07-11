import { useState } from "react";
import { GoSearch, GoHome } from "react-icons/go";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { BsListNested } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { categoriesData, productData } from "../../../stactic/data";
import DropDown from "../DropDown/DropDown"
import Navbar from "../Navbar/Navbar";
// import Image from '../../Assets/image'
const cx = classNames.bind(styles);
const Header = ({ activeHeading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    // lay ra nhung du lieu co trong productData va lay ra nhung chu thuong cua term trung voi du lieu cua productData
    const filteredProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase())
    );
    setSearchData(filteredProducts);
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });
  return (
    <div className={cx("section")}>
      {/* main header */}
      <div className={cx("main-header")}>
        {/* logo */}
        {/* <img src={Image.logo}></img> */}
        <Link to="/">
          <img
            src="https://salt.tikicdn.com/ts/upload/e4/49/6c/270be9859abd5f5ec5071da65fab0a94.png"
            alt=""
            className={cx("img-logo")}
          />
        </Link>
        {/* search box */}
        <div className={cx("search-box")}>
          <GoSearch size={20} className={cx("icon")} />
          <input
            type="text"
            placeholder="Search product"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button>Tìm kiếm </button>
          {searchData && searchData.length !== 0 ? (
            <div className={cx("poper-search")}>
              {searchData &&
                searchData.map((i, index) => {
                  const d = i.name;
                  const Product_name = d.replace(/\s+/g, "-");
                  return (
                    <Link
                      to={`/product/${Product_name}`}
                      className={cx("Product-name")}
                    >
                      <div className={cx("product")}>
                        <img
                          src={i.image_Url[0].url}
                          alt=""
                          className={cx("product-img")}
                        ></img>
                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : null}
        </div>
        <Link to="/" className={cx("link-provide")}>
          <GoHome className={cx("provide-icon")} />
          <h2>Home</h2>
        </Link>
        <Link to="/seller" className={cx("link-provide")}>
          <MdOutlineInsertEmoticon className={cx("provide-icon")} />
          <h2>Becom Seller</h2>
        </Link>
      </div>
      {/* category */}
      <div
        className={cx(
          "bottom-header",
          `${active === true ? "header-scroll" : null}`
        )}
      >
        {/* categories */}
        <div
          className={cx("categories")}
          onClick={() => setDropDown(!dropDown)}
        >
          <BsListNested className={cx("categories-icon")} />
          <h2>All categories</h2>
          <IoIosArrowDown className={cx("category-drop")} />
        </div>
        {dropDown ? (
          <DropDown categoriesData={categoriesData} setDropDown={setDropDown} />
        ) : null}
        {/* navbar */}
        <div className={cx("Navbar")}>
          <Navbar active={activeHeading} />
        </div>
        <div className={cx("user-using")}>
          {/* favorite store */}
          <div className={cx("favorite")}>
            <AiOutlineHeart className={cx("icon")} />
            <span className={cx("Item-icon")}>0</span>
          </div>
          {/* Cart */}
          <div className={cx("cart")}>
            <AiOutlineShoppingCart className={cx("icon")} />
            <span className={cx("Item-icon")}>0</span>
          </div>
          {/* user */}
          <div className={cx("cart")}>
            <Link to="/login">
              <CgProfile className={cx("icon")} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
