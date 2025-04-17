import React from "react";
import K from "../constants";
import { NavLink } from "react-router";
import logo from "../assets/images/logo.png";

const SideBar = () => {
  return (
    <div className="flex flex-col w-60 gap-y-6 bg-black h-screen px-4 py-4 fixed top-0 left-0 z-50 overflow-y-auto">
    {/* Logo/Profile Section */}
    <div className="flex flex-col items-center justify-center mt-2">
      <img
        src={logo}
        alt="User"
        className="w-24 h-24  rounded-full border-2 border-gray-700 object-cover"
      />
      {/* <p className="text-red-200 text-sm font-medium mt-2 hidden md:block">
        Smart-Spend
      </p> */}
    </div>
      <div className="flex flex-col gap-y-6">
        {K.NAVLINKS.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={link.path}
              className="text-white hover:bg-blue-600 hover:text-black px-3 py-2 w-full rounded-md flex items-center space-x-2"
            >
              <link.icon className="w-6 h-6" />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Logo at the bottom */}
      <div className="flex flex-col items-center justify-center mb-4">
        {/* Replace this with your actual logo/icon */}
       
        <h1 className="text-lg font-bold tracking-wide italic px-5 py-7">
          <span className="text-red-500">Smart</span>
          <span className="text-white">Spend</span>
        </h1>
      </div>
    </div>
  );
};

export default SideBar;
