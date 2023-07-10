import React from "react";
import Header from "../components/layouts/Header.jsx";
import Categories from "../components/Route/Categories/Categories";
import Slider from "../components/Route/Slider/Slider";
import BestDeals from "../components/Route/BestDeals/BestDeals";
const HomePage = () => {
  return (
    <div>
      <Header activeHeading={2} />
      <Slider/>
      <Categories/>
      <BestDeals/>
    </div>
  );
};

export default HomePage;
