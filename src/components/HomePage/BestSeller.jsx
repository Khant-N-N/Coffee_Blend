import React from "react";
import { menu1, menu2, menu3, menu4 } from "../../assets";

const BestSeller = () => {
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
        <div className="md:w-[200px] lg:w-[250px] flex flex-col items-center text-center gap-5">
          <img
            src={menu1}
            alt="coffee"
            className="w-full h-52 hover:scale-[1.1] object-cover"
          />
          <h4>COFFEE CAPUCCINO</h4>
          <p className="text-[.9rem] text-[var(--text-secondary)]">
            A small river named Duden flows by their place and supplies
          </p>
          <p>$5.90</p>
          <button className="px-4 py-2 text-[.9rem] border border-[var(--secondary-color)] hover:bg-[var(--secondary-color)]">
            Add to Cart
          </button>
        </div>
        <div className="md:w-[200px] lg:w-[250px] flex flex-col items-center text-center gap-5">
          <img
            src={menu2}
            alt="coffee"
            className="w-full h-52 hover:scale-[1.1] object-cover"
          />
          <h4>COFFEE CAPUCCINO</h4>
          <p className="text-[.9rem] text-[var(--text-secondary)]">
            A small river named Duden flows by their place and supplies
          </p>
          <p>$5.90</p>
          <button className="px-4 py-2 text-[.9rem] border border-[var(--secondary-color)] hover:bg-[var(--secondary-color)]">
            Add to Cart
          </button>
        </div>
        <div className="md:w-[200px] lg:w-[250px] flex flex-col items-center text-center gap-5">
          <img
            src={menu3}
            alt="coffee"
            className="w-full h-52 hover:scale-[1.1] object-cover"
          />
          <h4>COFFEE CAPUCCINO</h4>
          <p className="text-[.9rem] text-[var(--text-secondary)]">
            A small river named Duden flows by their place and supplies
          </p>
          <p>$5.90</p>
          <button className="px-4 py-2 text-[.9rem] border border-[var(--secondary-color)] hover:bg-[var(--secondary-color)]">
            Add to Cart
          </button>
        </div>
        <div className="md:w-[200px] lg:w-[250px] flex flex-col items-center text-center gap-5">
          <img
            src={menu4}
            alt="coffee"
            className="w-full h-52 hover:scale-[1.1] object-cover"
          />
          <h4>COFFEE CAPUCCINO</h4>
          <p className="text-[.9rem] text-[var(--text-secondary)]">
            A small river named Duden flows by their place and supplies
          </p>
          <p>$5.90</p>
          <button className="px-4 py-2 text-[.9rem] border border-[var(--secondary-color)] hover:bg-[var(--secondary-color)]">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
