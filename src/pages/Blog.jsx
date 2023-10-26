import React, { useState } from "react";
import PagesHero from "../components/PagesHero";
import { blogs } from "../constants/constants";
import { PiChatCenteredTextBold } from "react-icons/pi";
import ReactPaginate from "react-paginate";

const Blog = () => {
  //pagination
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 3;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = blogs.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blogs.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;

    setItemOffset(newOffset);
  };
  return (
    <div className="flex flex-col items-center mb-36">
      <PagesHero title="Blog" path="blog" />
      <div className="flex flex-col flex-wrap md:flex-row gap-6 w-[85%] md:w[70%] my-20 mx-auto justify-center">
        {currentItems?.map((blog) => (
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

      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        activeLinkClassName="bg-[var(--secondary-color)] text-white"
        nextLinkClassName="border border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] text-[var(--secondary-color)] hover:text-white py-2 px-3 rounded-full"
        previousLinkClassName="border border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] text-[var(--secondary-color)] hover:text-white py-2 px-3 rounded-full"
        containerClassName="flex gap-2"
        pageLinkClassName="border border-[var(--secondary-color)] hover:bg-[var(--secondary-color)] text-[var(--secondary-color)] hover:text-white py-2 px-3 rounded-full"
      />
    </div>
  );
};

export default Blog;
