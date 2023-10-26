import React from "react";
import { about } from "../../assets";

const Story = () => {
  return (
    <div className="w-full relative">
      <div className="lg:w-1/2 w-full h-auto lg:h-[85vh]">
        <img
          src={about}
          alt="bar"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        data-aos="fade-up"
        className="bg-black/60 lg:absolute lg:w-[600px] p-9 top-20 left-[43.6%]"
      >
        <h1 className="font-curve italic text-[var(--secondary-color)] -mb-7 z-10 font-bold text-[2.2rem]">
          Discover
        </h1>
        <h1 className="text-[1.8rem] font-bold lg:text-[2rem] z-0">
          OUR STORY
        </h1>
        <p className="text-[1rem] text-[var(--text-secondary)] leading-loose tracking-wide">
          On her way she met a copy. The copy warned the Little Blind Text, that
          where it came from it would have been rewritten a thousand times and
          everything that was left from its origin would be the word "and" and
          the Little Blind Text should turn around and return to its own, safe
          country. But nothing the copy said could convince her and so it didn’t
          take long until a few insidious Copy Writers ambushed her, made her
          drunk with Longe and Parole and dragged her into their agency, where
          they abused her for their.
        </p>
      </div>
    </div>
  );
};

export default Story;
