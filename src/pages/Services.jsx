import React from "react";
import Service from "../components/HomePage/Service";
import PagesHero from "../components/PagesHero";

const Services = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto">
      <PagesHero title="Services" path="services" />
      <Service />
    </div>
  );
};

export default Services;
