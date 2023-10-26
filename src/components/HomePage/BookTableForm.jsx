import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { TbClockHour9 } from "react-icons/tb";

const BookTableForm = () => {
  return (
    <div className="relative bg-black">
      <div className="flex flex-wrap lg:flex-nowrap gap-3 py-8 lg:w-2/3">
        <div data-aos="fade-up" className="flex gap-4 w-4/5 ps-5">
          <BsTelephoneFill className="text-[var(--secondary-color)] mt-1 text-[20px] lg:w-2/5" />
          <div>
            <h3>000 (123) 456 7890</h3>
            <p className="text-[1rem] text-[var(--text-secondary)]">
              A small river named Duden flows by their place and supplies.
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex gap-4 w-4/5 ps-5"
        >
          <FaLocationCrosshairs className="text-[var(--secondary-color)] mt-2 text-[20px] lg:w-2/5" />
          <div>
            <h3>198 West 21th Street</h3>
            <p className="text-[1rem] text-[var(--text-secondary)]">
              203 Fake St. Mountain View, San Francisco, California, USA
            </p>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="flex gap-4 w-4/5 ps-5"
        >
          <TbClockHour9 className="text-[var(--secondary-color)] mt-2 text-[20px] lg:w-2/5" />
          <div>
            <h3>Open Monday-Friday</h3>
            <p className="text-[1rem] text-[var(--text-secondary)]">
              8:00am - 9:00pm
            </p>
          </div>
        </div>
        <div className="w-0 md:w-[700px] h-full bg-black" />
      </div>
      <form className="bg-[var(--secondary-color)] lg:h-[300px] lg:py-3 lg:px-1 py-7 px-4 flex flex-wrap justify-center items-center gap-5 relative lg:absolute w-full lg:max-w-[500px] right-0 bottom-0">
        <h3 className="w-[90%] font-semibold">BOOK A TABLE</h3>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className="bg-transparent placeholder-white/70 border-b outline-none py-2 px-1 w-[90%] lg:w-2/5 text-base lg:text-sm"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className="bg-transparent placeholder-white/70 border-b outline-none py-2 px-1 w-[90%] lg:w-2/5 text-base lg:text-sm"
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          className="bg-transparent placeholder-white/70 border-b outline-none py-2 px-1 w-[90%] lg:w-3/12 text-base lg:text-sm"
        />
        <input
          type="time"
          name="time"
          placeholder="Time"
          className="bg-transparent placeholder-white/70 border-b outline-none py-2 px-1 w-[90%] lg:w-3/12 text-base lg:text-sm"
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          className="bg-transparent placeholder-white/70 border-b outline-none py-2 px-1 w-[90%] lg:w-3/12 text-base lg:text-sm"
        />
        <textarea
          name="message"
          placeholder="Message"
          className="bg-transparent placeholder-white/70 border-b outline-none py-2 px-1 w-[90%] lg:w-2/5 text-base lg:text-sm"
        />
        <button
          type="button"
          className="bg-white hover:bg-black hover:text-white text-black p-3 w-[90%] lg:w-2/5 lg:text-sm text-base rounded-sm"
        >
          Appointment
        </button>
      </form>
    </div>
  );
};

export default BookTableForm;
