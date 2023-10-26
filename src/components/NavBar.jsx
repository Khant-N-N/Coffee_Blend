import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";

const NavBar = () => {
  const count = useSelector((state) => state.cart);
  const [isCartFill, setIsCartFill] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [bg, setBg] = useState(false);
  const [itemNum, setItemNum] = useState(0);
  useEffect(() => {
    let itemCount = 0;
    for (const key in count) {
      if (count.hasOwnProperty(key)) {
        if (count[key] > 0) {
          itemCount += 1;
        }
      }
    }
    itemCount === 0 ? setIsCartFill(false) : setIsCartFill(true);
    setItemNum(itemCount);
  }, [count]);
  useEffect(() => {
    const navColorOnScroll = () => {
      const scrollPosition = window.scrollY;
      scrollPosition > 500 ? setBg(true) : setBg(false);
    };
    const scroll = window.addEventListener("scroll", navColorOnScroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav
      className={`${
        bg
          ? "bg-[var(--primary-color)]"
          : "md:bg-transparent md:border-b-[.4px] bg-black"
      } uppercase transition-all duration-500 flex flex-wrap py-4 px-6 justify-between md:justify-around items-center sticky md:fixed z-30 top-0 w-full`}
    >
      <Link onClick={handleScrollTop} to="/" className="w-1/2 md:w-auto">
        <p>COFFEE</p> <p>BLEND</p>
      </Link>
      <div className="md:flex items-center gap-x-5 hidden">
        <NavLink
          onClick={handleScrollTop}
          className={({ isActive }) =>
            isActive
              ? "text-[var(--secondary-color)]"
              : "hover:text-[var(--secondary-color)]"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          onClick={handleScrollTop}
          className={({ isActive }) =>
            isActive
              ? "text-[var(--secondary-color)]"
              : "hover:text-[var(--secondary-color)]"
          }
          to="/Menu"
        >
          Menu
        </NavLink>
        <NavLink
          onClick={handleScrollTop}
          className={({ isActive }) =>
            isActive
              ? "text-[var(--secondary-color)]"
              : "hover:text-[var(--secondary-color)]"
          }
          to="/Services"
        >
          Services
        </NavLink>
        <NavLink
          onClick={handleScrollTop}
          className={({ isActive }) =>
            isActive
              ? "text-[var(--secondary-color)]"
              : "hover:text-[var(--secondary-color)]"
          }
          to="/Blog"
        >
          Blog
        </NavLink>
        <NavLink
          onClick={handleScrollTop}
          className={({ isActive }) =>
            isActive
              ? "text-[var(--secondary-color)]"
              : "hover:text-[var(--secondary-color)]"
          }
          to="/About"
        >
          ABOUT
        </NavLink>
        <NavLink
          onClick={handleScrollTop}
          className={({ isActive }) =>
            isActive
              ? "text-[var(--secondary-color)]"
              : "hover:text-[var(--secondary-color)]"
          }
          to="/Shop"
        >
          Shop
        </NavLink>
        <NavLink
          onClick={handleScrollTop}
          className={({ isActive }) =>
            isActive
              ? "text-[var(--secondary-color)]"
              : "hover:text-[var(--secondary-color)]"
          }
          to="/Contact"
        >
          Contact
        </NavLink>
        <NavLink
          onClick={handleScrollTop}
          className={({ isActive }) =>
            isActive
              ? "text-[var(--secondary-color)] flex"
              : "hover:text-[var(--secondary-color)] flex"
          }
          to="/Cart"
        >
          <FaShoppingCart className="text-[1.4rem]" />
          {isCartFill && (
            <span className="px-[.6rem] ms-[-6px] mt-[-5px] mb-[5px] rounded-full bg-[#f8b500] text-black text-[.8rem] font-bold">
              {itemNum}
            </span>
          )}
        </NavLink>
      </div>
      <div className="flex md:hidden w-1/2 justify-end">
        <NavLink
          onClick={() => {
            window.scrollTo(0, 0);
            setMobile(false);
          }}
          className={({ isActive }) =>
            isActive
              ? "text-[var(--secondary-color)] flex"
              : "hover:text-[var(--secondary-color)] flex"
          }
          to="/Cart"
        >
          <FaShoppingCart className="text-[1.4rem]" />
          {isCartFill && (
            <span className="px-[.6rem] ms-[-6px] mt-[-5px] mb-[5px] py-1 rounded-full bg-[#f8b500] text-black text-[.8rem] font-bold">
              {itemNum}
            </span>
          )}
        </NavLink>
        <div
          onClick={() => setMobile(!mobile)}
          className="flex items-center gap-2 cursor-pointer select-none ms-3"
        >
          <GiHamburgerMenu className="text-[1.5rem] cursor-pointer" />
          <span>Menu</span>
        </div>
      </div>
      {mobile && (
        <div className="flex md:hidden flex-col w-full gap-y-4 mt-8">
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
              setMobile(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "text-[var(--secondary-color)] w-full"
                : "hover:text-[var(--secondary-color)]"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
              setMobile(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "text-[var(--secondary-color)] w-full"
                : "hover:text-[var(--secondary-color)] w-full"
            }
            to="/Menu"
          >
            Menu
          </NavLink>
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
              setMobile(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "text-[var(--secondary-color)] w-full"
                : "hover:text-[var(--secondary-color)] w-full"
            }
            to="/Services"
          >
            Services
          </NavLink>
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
              setMobile(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "text-[var(--secondary-color)] w-full"
                : "hover:text-[var(--secondary-color)] w-full"
            }
            to="/Blog"
          >
            Blog
          </NavLink>
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
              setMobile(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "text-[var(--secondary-color)] w-full"
                : "hover:text-[var(--secondary-color)] w-full"
            }
            to="/About"
          >
            About
          </NavLink>
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
              setMobile(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "text-[var(--secondary-color)] w-full"
                : "hover:text-[var(--secondary-color)] w-full"
            }
            to="/Shop"
          >
            Shop
          </NavLink>
          <NavLink
            onClick={() => {
              window.scrollTo(0, 0);
              setMobile(false);
            }}
            className={({ isActive }) =>
              isActive
                ? "text-[var(--secondary-color)] w-full"
                : "hover:text-[var(--secondary-color)] w-full"
            }
            to="/Contact"
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
