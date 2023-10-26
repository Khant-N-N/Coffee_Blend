import React from "react";
import PagesHero from "../components/PagesHero";
import Story from "../components/HomePage/Story";
import Reviews from "../components/HomePage/Reviews";
import HomeMenu from "../components/HomePage/HomeMenu";
import DataRunner from "../components/HomePage/DataRunner";

const About = () => {
  return (
    <div>
      <PagesHero title="About us" path="About" />
      <Story />
      <Reviews />
      <HomeMenu />
      <DataRunner />
    </div>
  );
};

export default About;
