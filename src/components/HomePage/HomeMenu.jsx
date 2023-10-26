import React from "react";
import { menu1, menu2, menu3, menu4 } from "../../assets";
import { Link } from "react-router-dom";

const HomeMenu = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center my-3 items-center md:h-[90vh]">
      <div
        data-aos="fade-up"
        className="w-[90%] xs:w-4/5 md:w-1/2 md:text-right md:flex flex-col items-end"
      >
        <h1 className="font-curve italic text-[var(--secondary-color)] -mb-7 z-10 font-bold text-[2.2rem]">
          Discover
        </h1>
        <h1 className="text-[1.8rem] font-bold md:text-[2rem] z-0">OUR MENU</h1>
        <p className="text-[.9rem] text-[var(--text-secondary)] leading-loose tracking-wide my-5 md:max-w-[500px]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean.
        </p>
        <Link
          to="/Menu"
          onClick={() => window.scrollTo(0, 0)}
          className="border border-[var(--secondary-color)] text-[var(--secondary-color)] my-2 hover:text-white hover:bg-[var(--secondary-color)] px-6 py-4 text-[.9rem]"
        >
          View Full Menu
        </Link>
      </div>
      <div className="w-[90%] xs:w-4/5 md:w-1/2 md:grid grid-cols-2 p-8 gap-x-3">
        <img
          src={menu1}
          loading="lazy"
          alt="coffee1"
          className="w-full object-cover h-52 lg:w-60 md:h-auto mb-6 mr-2"
        />

        <img
          src={menu2}
          loading="lazy"
          alt="coffee2"
          className="w-full object-cover h-52 lg:w-60 md:h-auto mb-6 md:mt-6"
        />

        <img
          src={menu3}
          loading="lazy"
          alt="coffee3"
          className="w-full object-cover h-52 lg:w-60 md:h-auto mb-6 mr-2"
        />

        <img
          src={menu4}
          loading="lazy"
          alt="coffee4"
          className="w-full object-cover h-52 lg:w-60 md:h-auto mb-6 md:mt-6"
        />
      </div>
    </div>
  );
};

export default HomeMenu;
