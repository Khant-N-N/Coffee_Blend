import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import { image1, image2 } from "../assets";
import { PiChatCenteredTextBold } from "react-icons/pi";

const recentBlog = [
  {
    id: 1,
    img: image1,
    title: "The Delicious Pizza",
    date: "Sept 10, 2023",
    blog: "Even the all-powerful Pointing has no control about",
  },
  {
    id: 2,
    img: image2,
    title: "The Delicious Pizza",
    date: "Sept 10, 2023",
    blog: "Even the all-powerful Pointing has no control about",
  },
];

const Footer = () => {
  return (
    <div className="bg-[var(--primary-color)] py-10">
      <div className="lg:flex lg:w-[80%] mx-auto">
        <div className="py-4 px-5 mx-auto my-5 w-[90%] lg:w-[20%]">
          <h4>ABOUT US</h4>
          <p className="my-9">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex gap-6 text-[1.7rem]">
            <BsTwitter className="cursor-pointer" />
            <BsFacebook className="cursor-pointer" />
            <BsInstagram className="cursor-pointer" />
          </div>
        </div>
        <div className="py-4 px-5 mx-auto my-5 w-[90%] lg:w-[35%]">
          <h4>RECENT BLOGS</h4>
          <div className="mt-9">
            {recentBlog.map(({ title, id, img, date, blog }) => (
              <div key={id} className="flex gap-6 mb-2">
                <img
                  src={img}
                  alt={title}
                  className="w-[70px] h-[70px] object-cover"
                />
                <div>
                  <p>{blog}</p>
                  <div className="flex gap-2 text-[.8rem] w-full text-[--text-secondary]">
                    <span>{date}</span>
                    <span>Admin</span>
                    <span>
                      <PiChatCenteredTextBold className="inline text-[1rem] mb-1" />
                      19
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="py-4 px-5 mx-auto my-5 w-[90%] lg:w-[15%]">
          <h4>SERVICES</h4>
          <div className="flex flex-col gap-y-4 mt-9">
            <Link className="hover:text-white text-[var(--text-secondary)]">
              Cooked
            </Link>
            <Link className="hover:text-white text-[var(--text-secondary)]">
              Deliver
            </Link>
            <Link className="hover:text-white text-[var(--text-secondary)]">
              Quality Foods
            </Link>
            <Link className="hover:text-white text-[var(--text-secondary)]">
              Mixed
            </Link>
          </div>
        </div>
        <div className="py-4 px-5 mx-auto my-5 w-[90%] lg:w-[30%]">
          <h4>HAVE A QUESTION?</h4>
          <div className="text-[.9rem] xs:text-[1rem] mt-5 flex flex-col">
            <div className="flex gap-4 mt-4">
              <FaLocationDot className="mt-1 text-[20px] " />
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className="flex gap-4 mt-4">
              <FaPhone className="mt-1 text-[20px] " />
              <p>+959 421 182 623</p>
            </div>
            <div className="flex gap-4 mt-4 flex-wrap">
              <AiFillMail className="mt-1 text-[20px] " />
              <p className="lg:text-[0.9rem]">khantnyinyi.magnet@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
