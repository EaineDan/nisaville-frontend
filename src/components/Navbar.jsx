import React, { useState } from "react";
import { FaBars, FaPhone, FaRegEnvelope } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { TbHomeCheck } from "react-icons/tb";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../assets/nisaville.png";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="sticky top-0 z-50">
      <div className="lg:block hidden bg-[#10b981] text-white py-2">
        <div className="container mx-auto lg:flex hidden items-center justify-between px-3">
          <span className="flex items-center gap-x-1">
            <GoLocation />
            <p className="text-sm">American House, EAST LEGON</p>
          </span>
          <div className="flex items-center gap-x-4">
            <span className="flex items-center gap-x-1">
              <FaPhone />
              <p>+233 248036586</p>
            </span>
            <span className="flex items-center gap-x-1">
              <FaRegEnvelope />
              <p>eaine.dan98@gmail.com</p>
            </span>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container mx-auto flex flex-wrap items-center justify-center px-3">
          <div className="lg:flex lg:items-center justify-between items-baseline lg:pt-0 pt-15 ">
            <div className=" flex gap-56 items-center lg:flex-none ">
              <img
                src={logo}
                alt="logo"
                className="lg:m-5
                w-[20vh] m-5 bg-white  flex"
              />
              {navbarOpen ? (
                <AiOutlineClose
                  className="text-3xl lg:hidden"
                  onClick={toggleNavbar}
                />
              ) : (
                <FaBars className="text-3xl lg:hidden" onClick={toggleNavbar} />
              )}
            </div>
            <ul
              className={`flex flex-wrap lg:flex-row flex-col items-center gap-x-5 gap-y-7 list-none ${
                navbarOpen ? "block" : "hidden"
              }`}
            >
              <Link to="/">
                <li className="py-2 flex font-medium items-center leading-snug hover:underline hover:underline-offset-8  hover:text-emerald-500">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="py-2 flex font-medium items-center leading-snug hover:underline hover:underline-offset-8 hover:text-emerald-500">
                  About
                </li>
              </Link>
              <Link to="/resident">
                <li className="py-2 flex font-medium items-center leading-snug hover:underline hover:underline-offset-8 hover:text-emerald-500">
                  Residencies
                </li>
              </Link>

              <li className="py-2 flex font-medium items-center leading-snug">
                <button className="py-4 bg-emerald-500 text-white hover:bg-white hover:text-emerald-500 flex items-center gap-2 rounded-full w-[28vh] p-3">
                  <IoPersonCircleOutline className="text-xl" />
                  <p>Login/Register</p>
                </button>
              </li>

              <li className="py-2 flex font-medium items-center leading-snug">
                <button className="py-4 flex  bg-emerald-500 text-white hover:bg-white hover:text-emerald-500  items-center gap-2 rounded-full w-[28vh] p-5">
                  <TbHomeCheck className="text-xl" />
                  <p>Add Listing</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
