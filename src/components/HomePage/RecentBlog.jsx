import React from "react";
import { PiChatCenteredTextBold } from "react-icons/pi";
import { blogs } from "../../constants/constants";

const RecentBlog = () => {
  return (
    <div>
      <div
        data-aos="fade-up"
        className="w-[90%] xs:w-4/5 md:w-1/2 mx-auto text-center mt-20 flex flex-col items-center"
      >
        <h1 className="text-[1.8rem] font-bold md:text-[2.3rem] z-0">
          RECENT FROM BLOG
        </h1>
        <p className="text-[.9rem] leading-loose tracking-wide my-5 md:max-w-[500px]">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-[85%] md:w[70%] mt-12 mb-20 mx-auto justify-center">
        {blogs?.slice(0, 3).map((blog) => (
          <div
            key={blog.id}
            className="md:w-[200px] lg:w-[250px] flex flex-col items-center gap-5"
          >
            <img
              src={blog.img}
              alt={blog.title}
              loading="lazy"
              className="w-full h-52 hover:scale-[1.1] object-cover"
            />
            <p className="flex gap-2 text-[.8rem] w-full text-[--text-secondary]">
              <span>{blog.date}</span>
              <span>Admin</span>
              <span>
                <PiChatCenteredTextBold className="inline text-[1rem] mb-1" /> 3
              </span>
            </p>
            <h3 className="uppercase w-full">{blog.title}</h3>
            <p className="text-[.9rem] text-[var(--text-secondary)]">
              {blog.blog}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
