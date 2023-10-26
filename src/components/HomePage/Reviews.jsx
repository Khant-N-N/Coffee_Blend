import React from "react";
import { customerReviews } from "../../constants/constants";

const Reviews = () => {
  return (
    <div className="bg-coffee-seeds relative bg-fixed bg-top bg-cover z-[-1] min-h-[90vh] pt-1">
      <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-[-1]" />
      <div className="w-[90%] xs:w-4/5 md:w-1/2 mx-auto text-center mt-20 flex flex-col items-center">
        <h1
          data-aos="fade-up"
          className="font-curve italic text-[var(--secondary-color)] -mb-7 z-10 font-bold text-[2.2rem]"
        >
          Testimony
        </h1>
        <h1
          data-aos="fade-up"
          className="text-[1.8rem] font-bold md:text-[2.3rem] z-0"
        >
          CUSTOMERS SAYS
        </h1>
        <p className="text-[.9rem] leading-loose tracking-wide my-5 md:max-w-[500px]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>
      <div className="lg:flex lg:absolute bottom-0">
        {customerReviews?.map(({ id, name, role, comment, profile }) => (
          <div
            data-aos="fade-up"
            data-aos-delay={`${id}00`}
            key={id}
            className="lg:w-1/5 flex flex-col justify-end"
          >
            <p
              className={`${
                id % 2 ? "bg-[var(--secondary-color)]" : "bg-[#b08b59]"
              } text-[1rem] px-8 py-7 leading-relaxed`}
            >
              <q>{comment}</q>
            </p>
            <div
              className={`${
                id % 2 ? "bg-[var(--secondary-color)]" : "bg-[#b08b59]"
              } flex px-8 pb-6 gap-6 items-center`}
            >
              <img
                src={profile}
                alt={name}
                className="w-10 h-10 rounded-full"
              />
              <p>
                <span>{name}</span>
                <span className="block text-[.8rem]">{role}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
