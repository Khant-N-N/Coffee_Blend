import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
import { PiCoffeeBold } from "react-icons/pi";
import { MdOutlineGroups } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaAward } from "react-icons/fa";

const DataRunner = () => {
  const targetRef = useRef();
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the container
      rootMargin: "0px", // No margin around the viewport
      threshold: 0.3, // Trigger when at least 50% of the target is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries[0].isIntersecting && setIsVisible(true);
    }, options);
    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={targetRef}
      className="bg-coffee-cup py-8 lg:h-[50vh] bg-fixed relative bg-top bg-cover"
    >
      <div className="bg-black/70 w-full h-full absolute top-0 left-0" />
      <div className="grid grid-cols-1 md:grid-cols-2 relative gap-7 lg:grid-cols-4 place-items-center w-[50%] mx-auto h-full">
        <div
          data-aos="fade-up"
          data-aos-delay="0"
          className="w-[250px] group gap-3 flex flex-col justify-center items-center relative"
        >
          <div className="border text-[var(--secondary-color)] group-hover:rotate-[135deg] transition-transform border-[var(--secondary-color)] p-9 group-hover:bg-[var(--secondary-color)]" />
          <PiCoffeeBold className="group-hover:text-black text-[var(--secondary-color)] text-[2rem] absolute top-[24px]" />
          {isVisible ? (
            <CountUp
              start={0}
              end={100}
              duration={3}
              className="text-[2rem] text-[var(--secondary-color)]"
            />
          ) : (
            <p className="text-[2rem] text-[var(--secondary-color)]">0</p>
          )}
          <p className="text-[1rem]">Coffee Branches</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="w-[250px] relative group gap-3 flex flex-col justify-center items-center"
        >
          <div className="border text-[var(--secondary-color)] group-hover:rotate-[135deg] transition-transform border-[var(--secondary-color)] p-9 group-hover:bg-[var(--secondary-color)]" />
          <FaAward className="group-hover:text-black text-[var(--secondary-color)] text-[2rem] absolute top-[24px]" />
          {isVisible ? (
            <CountUp
              start={0}
              end={85}
              duration={3}
              className="text-[2rem] text-[var(--secondary-color)]"
            />
          ) : (
            <p className="text-[2rem] text-[var(--secondary-color)]">0</p>
          )}
          <p className="text-[1rem]">Number of Awards</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="w-[250px] relative group gap-3 flex flex-col justify-center items-center"
        >
          <div className="border text-[var(--secondary-color)] group-hover:rotate-[135deg] transition-transform border-[var(--secondary-color)] p-9 group-hover:bg-[var(--secondary-color)]" />
          <MdOutlineGroups className="group-hover:text-black text-[var(--secondary-color)] text-[2rem] absolute top-[24px]" />
          {isVisible ? (
            <CountUp
              start={0}
              end={10567}
              duration={3}
              className="text-[2rem] text-[var(--secondary-color)]"
            />
          ) : (
            <p className="text-[2rem] text-[var(--secondary-color)]">0</p>
          )}
          <p className="text-[1rem]">Happy Customers</p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="w-[250px] relative group gap-3 flex flex-col justify-center items-center"
        >
          <div className="border text-[var(--secondary-color)] group-hover:rotate-[135deg] transition-transform border-[var(--secondary-color)] p-9 group-hover:bg-[var(--secondary-color)]" />
          <RiCustomerService2Fill className="group-hover:text-black text-[var(--secondary-color)] text-[2rem] absolute top-[24px]" />
          {isVisible ? (
            <CountUp
              start={0}
              end={900}
              duration={3}
              className="text-[2rem] text-[var(--secondary-color)]"
            />
          ) : (
            <p className="text-[2rem] text-[var(--secondary-color)]">0</p>
          )}
          <p className="text-[1rem]">Staff</p>
        </div>
      </div>
    </div>
  );
};

export default DataRunner;
