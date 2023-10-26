import React, { useState } from "react";
import { hero1, hero2, hero3 } from "../../assets";
import { RiRecordCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
const Hero = () => {
  const [currentBg, setCurrentBg] = useState(1);

  //   const changeBackground = () => {
  //     if (currentBg > 3) {
  //       return setCurrentBg(1);
  //     }
  //     console.log(currentBg);
  //     setCurrentBg(currentBg + 1);
  //   };
  //   useEffect(() => {
  //     setTimeout(changeBackground, 3000);
  //     return () => {
  //       clearTimeout(changeBackground); // Clear the timeout on component unmount
  //     };
  //   }, [currentBg]);

  const handleImgChange = (num) => {
    if (num === 1) {
      setCurrentBg(1);
    } else if (num === 2) {
      setCurrentBg(2);
    } else {
      setCurrentBg(3);
    }
  };
  return (
    <div className="relative w-full h-screen max-w-[1740px]">
      <img
        src={hero1}
        alt="hero1"
        className={`${
          currentBg === 1 ? "opacity-100" : "opacity-0"
        } absolute h-full w-full object-cover transition-opacity duration-500`}
      />
      <img
        src={hero2}
        alt="hero1"
        className={`${
          currentBg === 2 ? "opacity-100" : "opacity-0"
        } absolute h-full w-full object-cover transition-opacity duration-500`}
      />
      <img
        src={hero3}
        alt="hero1"
        className={`${
          currentBg === 3 ? "opacity-100" : "opacity-0"
        } absolute h-full w-full object-cover transition-opacity duration-500`}
      />
      <div className="bg-black/40 absolute w-full h-full" />
      <div
        data-aos="fade-up"
        className="absolute text-[1.2rem] top-[26%] xs:top-[33%] text-center w-full flex flex-col gap-y-4"
      >
        <h3 className="text-[1.8rem] font-curve text-[var(--secondary-color)]">
          Welcome
        </h3>
        <p className="md:text-[1.8rem] text-[1.6rem] font-bold mb-3">
          CREAMY HOT AND READY TO SERVE
        </p>
        <p className="max-w-[600px] mx-auto">
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </p>
        <div className="mt-2 text-[1rem]">
          <Link to="/Shop">
            <button
              type="button"
              className="border text-black hover:text-[var(--secondary-color)] border-[var(--secondary-color)] bg-[var(--secondary-color)] p-3 mx-1 hover:bg-transparent"
            >
              Order Now
            </button>
          </Link>
          <Link to="/Menu">
            <button
              type="button"
              className="border hover:text-black hover:border-[var(--secondary-color)] p-3 mx-1 hover:bg-[var(--secondary-color)]"
            >
              View Menu
            </button>
          </Link>
        </div>
      </div>
      <div className="absolute bottom-11 left-[40%] md:left-[47%] text-[1.4rem] flex gap-x-4">
        <RiRecordCircleFill
          onClick={() => handleImgChange(1)}
          className={`${
            currentBg === 1 ? "text-white" : "text-[var(--text-secondary)]"
          } cursor-pointer`}
        />
        <RiRecordCircleFill
          onClick={() => handleImgChange(2)}
          className={`${
            currentBg === 2 ? "text-white" : "text-[var(--text-secondary)]"
          } cursor-pointer`}
        />
        <RiRecordCircleFill
          onClick={() => handleImgChange(3)}
          className={`${
            currentBg === 3 ? "text-white" : "text-[var(--text-secondary)]"
          } cursor-pointer`}
        />
      </div>
    </div>
  );
};

export default Hero;
