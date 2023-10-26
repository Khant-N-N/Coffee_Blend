import React, { useEffect, useState } from "react";
import { foodMenu } from "../constants/constants";

const MenuCategory = ({ cate }) => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  useEffect(() => {
    setSelectedCategory(foodMenu.filter((food) => food.category === cate));
  }, [cate, foodMenu]);
  return (
    <div>
      <h3 className="uppercase font-bold tracking-wide mb-5">{cate}</h3>
      <div>
        {selectedCategory?.map(({ id, name, price, img, description }) => (
          <div className="flex gap-3 my-4 justify-center" key={id}>
            <img
              src={img}
              alt={name}
              loading="lazy"
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <div className="w-4/5">
              <p className="flex justify-between mb-3 text-[.9rem] w-[90%] border-b border-dashed border-b-[var(--secondary-color)]">
                <span className="uppercase bg-black/50 pe-5 text-white/70">
                  {name}
                </span>

                <span className="text-[var(--secondary-color)] bg-black/50 ps-5 text-right">
                  ${price}
                </span>
              </p>
              <p className="text-[.9rem] text-[var(--text-secondary)] w-[90%] leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
