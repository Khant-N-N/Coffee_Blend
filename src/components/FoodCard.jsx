import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { increment } from "../features/addToCart";

const FoodCard = ({ food }) => {
  const count = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="md:w-[200px] lg:w-[250px] flex flex-col items-center text-center gap-5">
      <Link
        onClick={() => window.scrollTo(0, 500)}
        to={`/Shop/${food.id}`}
        className="flex flex-col items-center gap-5"
      >
        <img
          src={food.img}
          alt={food.name}
          loading="lazy"
          className="w-full h-52 hover:scale-[1.1] object-cover"
        />
        <h3 className="uppercase">{food.name}</h3>
        <p className="text-[.9rem] text-[var(--text-secondary)]">
          {food.description}
        </p>
        <p>${food.price}</p>
      </Link>
      <button
        onClick={() => dispatch(increment(food.id))}
        className="px-4 py-2 text-[.9rem] relative border border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-black"
      >
        Add to Cart{" "}
        {count[food.id] !== 0 && (
          <span className="absolute right-[-.7rem] top-[-.7rem] text-black bg-[#f8b500] px-2 rounded-full">
            {count[food.id]}
          </span>
        )}
      </button>
    </div>
  );
};

export default FoodCard;
