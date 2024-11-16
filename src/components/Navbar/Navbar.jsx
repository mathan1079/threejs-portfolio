import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../../styles";
import { navLinks } from "../../constants";
import { menu, close } from "../../assets";
import { personalDetails } from "../../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 fixed top-0 z-20 transition-all duration-300 ${
        scrolled ? "bg-primary shadow-md" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-8">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
            window.location.reload();
          }}
        >
          {/* Logo or Name */}
          <p className="text-white text-[22px] sm:text-[28px] font-bold cursor-pointer">
            {personalDetails.name}
          </p>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex flex-row gap-6">
          {navLinks.map((nav) => (
            <li
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[14px] sm:text-[16px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          {/* Mobile Dropdown Menu */}
          <div
            className={`absolute top-16 right-4 w-[75%] max-w-xs rounded-lg shadow-lg z-20 bg-primary transform transition-all duration-300 ease-in-out ${
              toggle
                ? "translate-y-0 opacity-100 scale-100"
                : "-translate-y-5 opacity-0 scale-95"
            }`}
          >
            <ul className="flex flex-col gap-4 text-left p-5">
              {navLinks.map((nav) => (
                <li
                  className={`${
                    active === nav.title ? "text-white" : "text-secondary"
                  } font-medium text-[16px] cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
