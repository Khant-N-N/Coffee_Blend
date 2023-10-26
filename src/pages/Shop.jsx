import React from "react";
import PagesHero from "../components/PagesHero";
import MealsMenu from "../components/HomePage/MealsMenu";
const Shop = () => {
  return (
    <div>
      <PagesHero title="Order Online" path="Shop" />
      <MealsMenu />
    </div>
  );
};

export default Shop;
