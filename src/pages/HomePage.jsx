import React from "react";
import Header from "../components/layouts/Header.jsx";
import Categories from "../components/Route/Categories/Categories";
import Slider from "../components/Route/Slider/Slider.jsx";
const HomePage = () => {
  return (
    <div>
      <Header activeHeading={2} />
      <Slider/>
      <Categories/>
    </div>
  );
};

export default HomePage;
