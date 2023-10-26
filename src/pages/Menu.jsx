import React, { useEffect, useState } from "react";
import PagesHero from "../components/PagesHero";
import BookTableForm from "../components/HomePage/BookTableForm";
import { foodMenu } from "../constants/constants";
import MenuCategory from "../components/MenuCategory";

const Menu = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    setCategory([...new Set(foodMenu.map((food) => food.category))]);
  }, [foodMenu]);
  return (
    <div>
      <PagesHero title="Our Menu" path="Menu" />
      <BookTableForm />
      <div className="grid grid-cols-1 md:grid-cols-2 content-center w-4/5 mx-auto gap-9 my-28">
        {category.map((cate, id) => (
          <MenuCategory key={id} cate={cate} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
