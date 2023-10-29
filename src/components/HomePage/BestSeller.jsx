import React from "react";
import { increment } from "../../features/addToCart";
import { useDispatch } from "react-redux";
import { foodMenu } from "../../constants/constants";
import FoodCard from "../FoodCard";

const BestSeller = () => {
  const dispatch = useDispatch();
  const BestSeller = foodMenu?.filter((food) => food.category === "Coffee");
  return (
    <>
      <div className="text-center mt-20 flex flex-col items-center">
        <h1
          data-aos="fade-up"
          className="font-curve italic text-[var(--secondary-color)] -mb-7 z-10 font-bold text-[2.5rem]"
        >
          Discover
        </h1>
        <h1
          data-aos="fade-up"
          className="text-[1.8rem] font-bold md:text-[2.3rem] z-0 mb-6"
        >
          BEST COFFEE SELLERS
        </h1>
        <p
          data-aos="fade-up"
          className="text-[0.9rem] text-[var(--text-secondary)] max-w-[470px]"
        >
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 w-[85%] md:w[70%] mt-12 mb-20 mx-auto justify-center">
        {BestSeller?.map((food) => (
          <FoodCard key={food.id + 50} food={food} />
        ))}
      </div>
    </>
  );
};

export default BestSeller;
