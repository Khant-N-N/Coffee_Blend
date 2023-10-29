import { foodMenu } from "../../constants/constants";
import { useEffect, useState } from "react";
import FoodCard from "../FoodCard";

const MealsMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selected, setSelected] = useState("Starter");
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setCategory([...new Set(foodMenu.map((food) => food.category))]);
  }, [foodMenu]);

  useEffect(() => {
    setSelectedCategory(foodMenu.filter((food) => food.category === selected));
  }, [selected]);
  return (
    <div>
      <div
        data-aos="fade-up"
        className="w-[90%] xs:w-4/5 md:w-1/2 mx-auto text-center mt-20 flex flex-col items-center"
      >
        <h1 className="font-curve italic text-[var(--secondary-color)] -mb-7 z-10 font-bold text-[2.2rem]">
          Discover
        </h1>
        <h1 className="text-[1.8rem] font-bold md:text-[2.3rem] z-0">
          OUR PRODUCTS
        </h1>
        <p className="text-[.9rem] text-[var(--text-secondary)] leading-loose tracking-wide my-5 md:max-w-[500px]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="flex flex-col items-center my-10">
        <ul className="flex md:flex-row flex-col w-[90%] xs:w-[80%] md:w-auto gap-x-4 gap-y-2">
          {category.map((cate, index) => (
            <li
              key={index}
              onClick={() => setSelected(cate)}
              className={`${
                selected === cate && "bg-[var(--secondary-color)] text-black"
              } w-full transition-colors md:w-auto border-b-[var(--secondary-color)] border-b text-[var(--secondary-color)] font-bold py-3 px-4 hover:bg-[var(--secondary-color)] hover:text-black cursor-pointer`}
            >
              {cate}
            </li>
          ))}
        </ul>
        <div className="flex flex-col flex-wrap md:flex-row gap-6 w-[85%] md:w[70%] mt-12 mb-20 mx-auto justify-center">
          {selectedCategory?.map((food) => (
            <FoodCard food={food} key={food.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MealsMenu;
