import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ path, title, icon }) => {
  return (
    <li className="">
      <Link to={path}>
        <div className="flex flex-col text-center justify-center align-middle hover:text-gray-300">
          <span className="mx-auto mb-2 text-xl hidden md:flex">{icon}</span>
          <span className="">{title}</span>
        </div>
      </Link>
    </li>
  );
};

export default NavItem;
