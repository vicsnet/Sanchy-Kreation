import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Button from "./Button";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const isActiveStyle = "p-10 text-[14px] text-[#fefefe] bt";
  const isNotActiveStyle = "p-10 text-[14px] text-[#fefefe] bt opacity-[80%]";

  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <div className="">
      <div className=" flex justify-between w-[90%] mx-auto h-30">
        <div className="">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            <img
              src={Logo}
              alt=""
              className="w-[50%] h-auto pt-10 pb-10 pr-10"
            />
          </Link>
        </div>
        <ul className="hidden  lg:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }
            onClick={() => window.scrollTo(0, 0)}
          >
            <li>Our Story</li>
          </NavLink>
          <NavLink to="/contact" onClick={() => window.scrollTo(0, 0)}>
            <li className="p-5">
              <Button title="Contact Us" />
            </li>
          </NavLink>
        </ul>

        <div className="lg:hidden" onClick={handleClick}>
          {!nav ? (
            <AiOutlineMenu
              size={20}
              className="m-10 text-[#fefefe] cursor-pointer"
            />
          ) : (
            <AiOutlineClose
              size={20}
              className=" absolute mt-[130px] ml-[-20px] z-30 text-[#7C7B7B] cursor-pointer"
            />
          )}
        </div>
      </div>

      <ul
        className={
          !nav
            ? " hidden"
            : " absolute w-[100%] bg-[#171B29] rounded-[25px] h-[340px]  pt-16 "
        }
      >
        <Link to="/" onClick={() => window.scrollTo(0, 0)}>
          <li className=" text-[14px] text-[#001EDC] w-[80%] h-[58px] pl-4 py-5 bg-[#fefefe] mx-auto mb-6 ">
            Home
          </li>
        </Link>
        <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
          <li className=" text-[14px] text-[#001EDC] w-[80%] h-[58px] pl-4 py-5 bg-[#fefefe] mx-auto mb-6 ">
            Our Story
          </li>
        </Link>
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}>
          <li className=" text-[14px] text-[#001EDC] w-[80%] h-[58px] pl-4 py-5 bg-[#fefefe] mx-auto mb-11 ">
            Contact Us
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
