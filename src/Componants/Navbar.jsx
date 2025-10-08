import React from "react";
import { Link, useLocation } from "react-router";
import logo from "../assets/logo.png";
import { Github } from "lucide-react";

const Navbar = () => {
  const location = useLocation();

  const link = (
    <>
      <li>
        <Link
          to="/"
          className={`relative ${
            location.pathname === "/"
              ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]"
              : ""
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/allapps"
          className={`relative ${
            location.pathname === "/allapps"
              ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]"
              : ""
          }`}
        >
          Apps
        </Link>
      </li>
      <li>
        <Link
          to="/installiton"
          className={`relative ${
            location.pathname === "/installiton"
              ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-gradient-to-r after:from-[#632EE3] after:to-[#9F62F2]"
              : ""
          }`}
        >
          Installation
        </Link>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <div className="allcontainer">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
              >
                {link}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">
              <img className="h-[40px] w-[40px]" src={logo} alt="" />
              <span className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                HERO.IO
              </span>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 font-semibold">{link}</ul>
          </div>
          <div className="navbar-end">
            <a
              href="https://github.com/Yeasinoncode98/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white w-40 h-12"
            >
              <Github /> Contribute
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

