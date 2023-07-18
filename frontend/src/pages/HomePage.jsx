import React from "react";
import Header from "../components/layouts/Header/Header.jsx";
import Categories from "../components/Route/Categories/Categories";
import Slider from "../components/Route/Slider/Slider";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import Sponsored from "../components/Route/Sponsored/Sponsored";
import Footer from "../components/layouts/Footer/Footer.jsx";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} activeIconHeader={1}/>
      <Slider/>
      <Categories/>
      <BestDeals/>
      <Sponsored/>
      <Footer/>
    </div>
  );
};

export default HomePage;
