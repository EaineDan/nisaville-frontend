import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPhone,
  FaRegEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import { TbHomeCheck } from "react-icons/tb";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <section className="flex flex-col bg-slate-200 pt-8">
        <div className="container mx-auto lg:flex items-start justify-between pb-8">
          <div className="lg:flex justify-between px-3 w-full py-12 lg:text-left">
            <div className="lg:block flex flex-col items-center justify-center">
              <span className="flex items-center gap-x-2">
                <button className="bg-emerald-500 text-white rounded-full w-14 h-14">
                  <TbHomeCheck className="w-1/2 h-1/2 m-auto" />
                </button>
                <p className="font-medium text-xl">NisaVille</p>
              </span>
              <p className="xl:text-base text-sm py-4 w-4/5 lg:text-left text-center">
                American House, EAST-LEGON
              </p>
              <span className="flex items-center gap-x-2 pt-4">
                <FaPhone />
                <p>+233 248036586</p>
              </span>
              <span className="flex items-center gap-x-2 pt-4">
                <FaRegEnvelope />
                <p>eaine.dan98@gmail.com</p>
              </span>
            </div>

            <div className="lg:w-1/3 flex flex-col items-center lg:p-0 p-7">
              <p className="font-semibold lg:mt-0 lg:mb-0 mt-6 mb-3 uppercase">
                Quick Links
              </p>
              <ul>
                <Link to="/">
                  <li className="py-2  items-center leading-snug hover:underline hover:underline-offset-8 hover:text-emerald-500">
                    Home
                  </li>
                </Link>
                <Link to="/about">
                  <li className="py-2  items-center leading-snug hover:underline hover:underline-offset-8 hover:text-emerald-500">
                    About
                  </li>
                </Link>
                <Link to="/resident">
                  <li className="py-2  items-center leading-snug hover:underline hover:underline-offset-8 hover:text-emerald-500">
                    Residencies
                  </li>
                </Link>
              </ul>
            </div>

            <div className="lg:w-1/3 flex flex-col items-center lg:mb-0 mb-10 ">
              <p className="font-semibold lg:mt-0 mt-5 lg:p-0 p-2  text-center  uppercase">
                Discovery
              </p>
              <ul className="cursor-pointer">
                <li className=" items-center py-2 leading-snug hover:underline hover:underline-offset-8 hover:text-emerald-500">
                  East Legon
                </li>
                <li className="items-center py-2 leading-snug hover:underline hover:underline-offset-8 hover:text-emerald-500">
                  North Legon
                </li>
                <li className=" items-center leading-snug py-2 hover:underline hover:underline-offset-8 hover:text-emerald-500">
                  Osu
                </li>
                <li className="items-center leading-snug py-2 hover:underline hover:underline-offset-8 hover:text-emerald-500">
                  Ridge
                </li>
              </ul>
            </div>

            <div className="lg:w-1/3">
              <p className="font-semibold lg:mb-4 mt-6 uppercase lg:text-center text-center lg:pb-0 pb-4">
                Subscribe to our Newsletter!!!
              </p>
              <div className="relative h-14 mb-10 flex justify-center items-center">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="h-full w-full rounded-full  px-3 "
                />

                <button className="bg-emerald-400 text-white rounded-full w-12 h-12 flex justify-center items-center text-xl absolute right-1">
                  <IoArrowForward />
                </button>
              </div>
              <p className="text-center font-semibold  text-lg ">
                Follow us on
              </p>
              <span className="flex mt-3 gap-5 text-2xl text-center justify-center cursor-pointer ">
                <FaLinkedin className="text-blue-500 " />
                <FaTwitter className="text-blue-500" />
                <FaInstagram className="text-rose-500" />
                <FaFacebookF className="text-blue-500" />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-300 text-gray-700 xl:text-base text-sm">
        <p className="text-center p-3">
          {" "}
          &#169; Copyright 2024 NisaVille. All rights reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
