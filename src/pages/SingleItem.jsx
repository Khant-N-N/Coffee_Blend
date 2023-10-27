import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { foodMenu } from "../constants/constants";
import PagesHero from "../components/PagesHero";
import FoodCard from "../components/FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { manualAmount } from "../features/addToCart";

const SingleItem = () => {
  const count = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const inputRef = useRef();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    setProduct(foodMenu.find((food) => food.id === Number(id)));
    setRelatedProducts(
      foodMenu.filter(
        (food) => food.category === product?.category && food.id !== Number(id)
      )
    );
    inputRef.current.value = 1;
  }, [id, product]);

  return (
    <div>
      <PagesHero title="Product Detail" path="product detail" />
      <Link
        to="/Shop"
        className="px-3 md:mx-14 text-[var(--secondary-color)] my-10 flex max-w-xs items-center underline"
      >
        {"<"} Back to Shop
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-4/5 mx-auto mt-2 mb-24">
        <div>
          <img
            src={product?.img}
            alt={product?.name}
            className="h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 leading-relaxed tracking-wide text-[var(--text-secondary)] text-[1rem]">
          <h3 className="uppercase text-[1.6rem] md:text-[2rem] text-white">
            {product?.name}
          </h3>
          <p className="text-[1.6rem] text-[var(--secondary-color)]">
            ${product?.price}
          </p>
          <p>{product?.description}</p>
          <p>
            On her way she met a copy. The copy warned the Little Blind Text,
            that where it came from it would have been rewritten a thousand
            times and everything that was left from its origin would be the word
            "and" and the Little Blind Text should turn around and return to its
            own, safe country. But nothing the copy said could convince her and
            so it didn’t take long until a few insidious Copy Writers ambushed
            her, made her drunk with Longe and Parole and dragged her into their
            agency, where they abused her for their.
          </p>
          <div className="flex gap-3 w-full justify-center md:justify-start">
            <button
              onClick={() => {
                if (inputRef.current.value < 1) return;
                inputRef.current.value -= 1;
              }}
              type="button"
              className="border border-[var(--text-secondary)] bg-transparent text-center py-2 px-4 text-[var(--secondary-color)] active:scale-[0.9] font-bold text-[1.2rem]"
            >
              -
            </button>
            <input
              ref={inputRef}
              type="number"
              name="number"
              className="border border-[var(--text-secondary)] bg-transparent text-center py-2 px-4 text-[var(--secondary-color)] outline-none w-20 text-[1.2rem]"
            />
            <button
              onClick={() =>
                (inputRef.current.value = Number(inputRef.current.value) + 1)
              }
              type="button"
              className="border border-[var(--text-secondary)] bg-transparent text-center py-2 px-4 text-[var(--secondary-color)] active:scale-[0.9] font-bold text-[1.2rem]"
            >
              +
            </button>
          </div>
          <button
            onClick={() =>
              dispatch(manualAmount({ id: id, amount: inputRef.current.value }))
            }
            type="button"
            className="relative py-3 px-5 md:w-[14rem] border border-[var(--secondary-color)] text-black bg-[var(--secondary-color)] hover:bg-transparent hover:text-[var(--secondary-color)]"
          >
            {count[id] === 0 ? "Add to Cart" : "Update Cart"}
            {count[id] !== 0 && (
              <span className="absolute top-[-9px] right-[-10px] text-black bg-[#f8b500] py-0 px-2 rounded-full">
                {count[id]}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="text-center mb-20">
        <h3 className="text-[1.6rem] md:text-[2rem]">RELATED PRODUCTS</h3>
        <div className="flex flex-col flex-wrap md:flex-row gap-6 w-[85%] md:w[70%] my-12 mx-auto justify-center">
          {relatedProducts?.map((product) => (
            <FoodCard key={product.id} food={product} />
          ))}
        </div>
        <Link
          to="/Shop"
          className="text-[var(--secondary-color)] underline"
          onClick={() => window.scrollTo(0, 500)}
        >
          See More
        </Link>
      </div>
    </div>
  );
};

export default SingleItem;
