import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { foodMenu } from "../constants/constants";
import PagesHero from "../components/PagesHero";
import FoodCard from "../components/FoodCard";

const SingleItem = () => {
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
  }, [id, product]);

  return (
    <div>
      <PagesHero title="Product Detail" path="product detail" />
      <Link
        to="/Shop"
        className="px-3 md:px-14 text-[var(--secondary-color)] underline"
      >
        {"<"} Back to Shop
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-4/5 mx-auto my-24">
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
              type="button"
              className="border border-[var(--text-secondary)] bg-transparent text-center py-2 px-4 text-[var(--secondary-color)] font-bold text-[1.2rem]"
            >
              -
            </button>
            <input
              type="number"
              name="number"
              className="border border-[var(--text-secondary)] bg-transparent text-center py-2 px-4 text-[var(--secondary-color)] outline-none w-20 text-[1.2rem]"
            />
            <button
              type="button"
              className="border border-[var(--text-secondary)] bg-transparent text-center py-2 px-4 text-[var(--secondary-color)] font-bold text-[1.2rem]"
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="py-3 px-5 md:w-[14rem] border border-[var(--secondary-color)] text-black bg-[var(--secondary-color)] hover:bg-transparent hover:text-[var(--secondary-color)]"
          >
            Add to Cart
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
