import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/layouts/Header/Header.jsx";
import Footer from "../../components/layouts/Footer/Footer.jsx";
import ProductDetails from "../../components/Product/ProductDetails/ProductDetails.jsx";
import SuggestedProduct from "../../components/Product/SuggestedProduct/SuggestedProduct.jsx";
import { productData } from "../../stactic/data.js";
import classNames from "classnames/bind";
import styles from "./ProductsDetailsPage.module.scss";
const cx = classNames.bind(styles);
const ProductsDetailsPage = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const productName = name.replace(/-/g, " ");
  useEffect(() => {
    const data = productData.find((i) => i.name === productName);
    setData(data);
  }, []);
  return (
    <div>
      <Header />
      <ProductDetails data={data} />
      {data && <SuggestedProduct data={data} />}
      <Footer />
    </div>
  );
};

export default ProductsDetailsPage;
