import { useState } from "react";

import { close, menu } from "../assets";
import { navLinks } from "../constants";
import logos from "./logomy2.png";
import { NavLink } from "react-router-dom";
import newlogo from "../assets/newlogo2.png";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      {/* <img src={logos} alt="hoobank" className="w-[254px] h-[82px]" /> */}
      <img
        src={newlogo}
        alt="hoobank"
        className="w-[184px]  object-cover h-auto"
      />
      {/* <h1 className="font-poppins text-white">My Real Estate Agent</h1> */}

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <NavLink
            key={nav.link}
            to={`${nav.link}`}
            activeClassName="active"
            className={`font-poppins font-normal cursor-pointer text-dimWhite ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            {nav.title}
          </NavLink>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-40 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <NavLink
                key={nav.link}
                to={`${nav.link}`}
                activeClassName="active"
                className={`font-poppins font-normal cursor-pointer text-dimWhite ${
                  index === navLinks.length - 1 ? "mr-0" : "mr-10"
                }`}
              >
                {nav.title}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
