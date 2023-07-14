import React from 'react'
import Header from "../../components/layouts/Header/Header.jsx"
import Footer from "../../components/layouts/Footer/Footer.jsx"
import ProductDetails from "../../components/Products/ProductDetails.jsx"
import classNames from 'classnames/bind'
import styles from "./ProductsDetailsPage.module.scss"
const cx = classNames.bind(styles)
const ProductsDetailsPage = () => {
  return (
    <div>
        <Header/>
        <ProductDetails/>
        <Footer/>
    </div>
  )
}

export default ProductsDetailsPage