import React from 'react'
import { useNavigate } from 'react-router-dom';
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);
const DropDown = ({categoriesData, setDropDown}) => {
    const navigate = useNavigate()
    const submiitHandle = (i) => {
      navigate(`/products?categories=${i.title}`)
      setDropDown(false)
      window.location.reload()
    }
  return (
    <div>DropDown</div>
  )
}

export default DropDown