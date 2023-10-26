import React from "react";
import { Link } from "react-router-dom";
import { hero3 } from "../assets";

const PagesHero = ({ title, path }) => {
  return (
    <div className="w-full h-screen relative">
      <div className="bg-black/50 absolute top-0 w-full h-full" />
      <img src={hero3} alt="counter" className="w-full h-full object-cover" />
      <div className="absolute w-full top-[48%] text-center">
        <h3 className="text-[2rem] md:text-[2.7rem] uppercase">{title}</h3>
        <p className="text-[.9rem] mt-8">
          <Link
            to="/"
            className="hover:text-[var(--secondary-color)]"
            onClick={() => window.scrollTo(0, 0)}
          >
            HOME
          </Link>{" "}
          |{" "}
          <span className="text-white/50 cursor-default uppercase">{path}</span>
        </p>
      </div>
    </div>
  );
};

export default PagesHero;
