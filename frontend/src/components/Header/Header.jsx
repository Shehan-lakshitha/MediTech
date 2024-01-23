import React, { useEffect, useRef } from "react";

import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";

import { NavLink, Link } from "react-router-dom";

const navLinks = [
  {
    path: "/home",
    diplay: "Home",
  },
  {
    path: "/doctors",
    diplay: "Find a Doctor",
  },
  {
    path: "/services",
    diplay: "Services",
  },
  {
    path: "/contact",
    diplay: "Contact",
  },
];

const Header = () => {
  return (
    <header className="header flex items-center">
      <div className="container mt-3">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div>
            <img src={logo} alt="" />
          </div>

          {/* Menu section */}
          <div className="navigation">
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor leading-7 font-[600]"
                        : "text-textColor leading-7 font-[600]"
                    }
                  >
                    {link.diplay}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}
          <div className="flex items-center gap-4">
            <div>
              <Link to="/">
                <figure className="w-[45px] h-[45px] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>

            <Link to='/login'>
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center">Login</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
