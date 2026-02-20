import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import logo from "../assets/images/logo.png";
import { useState } from "react";

const navlinks = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Manu",
    path: "/manu",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [open, isOpen] = useState(false);

  return (
    <nav className="h-[8vh] md:h-[9vh] lg:h-[10vh] 2xl:h-[11vh] px-6 md:px-12 lg:px-45 2xl:px-50 navbar flex items-center justify-between sticky top-0 left-0 z-50">
      {/* Logo  */}
      <Link className="flex items-center gap-1 md:gap-2 " to={"/"}>
        <img
          className="h-[6vh] md:h-[7vh] lg:h-[8vh] 2xl:h-[9vh]"
          src={logo}
          alt=""
        />
        <h1 className="text-[24px] md:text-[28px] lg:text-[32px] 2xl:text-[36px] text-[#ffff]">
          Espresso Emporium
        </h1>
      </Link>
      {/* Learg Screen */}
      <ul className="lg:flex lg:items-center lg:gap-6 2xl:gap-8 hidden">
        {navlinks?.map((link) => (
          <li key={link?.id}>
            <NavLink
              className={({ isActive }) =>
                `text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] transition-all duration-300 ${isActive ? "text-[#E3B577]" : "text-white hover:text-[#E3B577]"}`
              }
              to={link?.path}
            >
              {link?.name}
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink
            className="text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] px-5 md:px-6 lg:px-7 2xl:px-8 py-.5 md:py-1.5 lg:py-2 border border-[#E3B577] hover:border-[#ffff] text-[#242222] hover:text-white bg-[#E3B577] hover:bg-transparent transition-all duration-300 flex items-center gap-1 md:gap-2 group"
            to={"/login"}
          >
            <span>Login</span>
            <MdKeyboardDoubleArrowRight className="group-hover:translate-x-1.5 duration-500" />
          </NavLink>
        </li>
      </ul>

      {/* Mobile Menu */}
      <ul
        className={`absolute px-5 md:px-12 top-[8vh] md:top-[9vh] w-full z-40 h-[calc(100vh-8vh)] md:h-[calc(100vh-9vh)] flex flex-col items-center justify-center bg-[#372727] transition-all duration-500 ease-in-out gap-3 md:gap-5 ${!open ? "-left-full" : "left-0"}`}
      >
        {navlinks?.map((link) => (
          <li className="w-full" key={link?.id}>
            <NavLink
              onClick={() => isOpen(!open)}
              className={({ isActive }) =>
                `text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] hover:bg-[#E3B577] hover:text-[#1B1A1A] py-2 md:py-2.5 duration-300 w-full flex items-center justify-center ${isActive ? "text-[#1B1A1A] bg-[#E3B577]" : "text-white"}`
              }
              to={link?.path}
            >
              {link?.name}
            </NavLink>
          </li>
        ))}

        <li className="w-full">
          <NavLink
            onClick={() => isOpen(!open)}
            className={({ isActive }) =>
              `text-[16px] md:text-[17px] lg:text-[18px] 2xl:text-[20px] hover:bg-[#E3B577] hover:text-[#1B1A1A] py-2 md:py-2.5 duration-300 w-full flex items-center justify-center ${isActive ? "text-[#1B1A1A] bg-[#E3B577]" : "text-white"}`
            }
            to={"/login"}
          >
            Login
          </NavLink>
        </li>
      </ul>

      {/* Menu Bar */}
      <button
        className="text-[#ffff] text-[25px] md:text-[30px] lg:hidden"
        onClick={() => isOpen(!open)}
      >
        {!open ? <IoMenu /> : <IoClose />}
      </button>
    </nav>
  );
};

export default Navbar;
