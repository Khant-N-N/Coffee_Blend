import React from "react";
import Hero from "../components/HomePage/Hero";
import BookTableForm from "../components/HomePage/BookTableForm";
import Story from "../components/HomePage/Story";
import Service from "../components/HomePage/Service";
import HomeMenu from "../components/HomePage/HomeMenu";
import DataRunner from "../components/HomePage/DataRunner";
import BestSeller from "../components/HomePage/BestSeller";
import CustomerImages from "../components/HomePage/CustomerImages";
import MealsMenu from "../components/HomePage/MealsMenu";
import Reviews from "../components/HomePage/Reviews";
import RecentBlog from "../components/HomePage/RecentBlog";
import ContactForm from "../components/HomePage/ContactForm";

const Home = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto">
      <Hero />
      <BookTableForm />
      <Story />
      <Service />
      <HomeMenu />
      <DataRunner />
      <BestSeller />
      <CustomerImages />
      <MealsMenu />
      <Reviews />
      <RecentBlog />
      <ContactForm />
    </div>
  );
};

export default Home;
