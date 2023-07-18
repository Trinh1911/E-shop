import React from 'react'
import ShopCreate from "../../components/Shop/ShopCreate/ShopCreate.jsx"
import className from "classnames/bind"
import styles from "./ShopCreatePage.module.scss"
const cx =  className.bind(styles)
const ShopCreatePage = () => {
  return (
    <div>
        <ShopCreate/>
    </div>
  )
}

export default ShopCreatePage