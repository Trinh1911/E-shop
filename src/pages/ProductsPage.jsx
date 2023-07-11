import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../components/layouts/Header/Header";
import { productData } from "../stactic/data";
import ProductCart from "../components/layouts/ProductCart/ProductCart";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryData = searchParams.get("category");
  const [data, setData] = useState([]);
  useEffect(() => {
    if (categoryData === null) {
      const d =
        productData && productData.sort((a, b) => a.total_sell - b.total_sell);
      setData(d);
    } else {
      const d =
        productData && productData.filter((i) => i.category === categoryData);
      setData(d);
    }
  }, []);

  return (
    <div>
      <Header activeHeading={3} />
      <div>
        {data && data.map((i, index) => <ProductCart data={i} key={index} />)}
        {data && data.length === 0 ? <h1></h1> : null}
      </div>
    </div>
  );
};

export default ProductsPage;
