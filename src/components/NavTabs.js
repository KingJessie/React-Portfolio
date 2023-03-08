import React from "react";
import { NavLink } from "react-router-dom";
let Logo = "/images/logo.png";

function NavTabs() {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        <img
          src={process.env.PUBLIC_URL + Logo}
          alt="logo"
          width={"10%"}
          className="mylogo"
        />

        <ul className="flex space-x-4">
          <li className="nav-item ">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/project"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Project
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact"
              end
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavTabs;
