import React from "react";
import NavItem from "./NavItem";
import { NavLinkData } from "./navlinks_data"; //this is where the data for the navigation is coming from.

const Nav = ({ children }) => {
  return (
    <div className="bg-gray-800 flex md:flex-col flex-row w-full md:w-auto p-4 md:p-6">
      <ul className="flex flex-row md:flex-col  text-white w-full h-full md:justify-between">
        <div className=" flex md:flex-col md:space-y-8 md:space-y-0 space-x-4 md:space-x-0 md:pt-10">
          {NavLinkData.map((data) => {
            return (
              <NavItem
                path={data.path}
                icon={data.icon}
                title={data.title}
                key={data.id}
              />
            );
          })}
        </div>
        <div className="pb-4 flex flex-row md:flex-col ml-auto md:ml-0 space-x-4 md:space-x-0 text-sm md:text-base">
          <NavItem path="/logout" title={"Logout"} />
          <NavItem path="/settings" title={"Settings"} />
        </div>
      </ul>
    </div>
  );
};

export default Nav;

//Cleaning the Navigation by seperating the styles

/* const styles = {
  navHolder:
    "bg-gray-800 p-4 flex flex-col md:flex-row text-center justify-center",
  navUl: "flex flex-col md:space-x-4 text-white w-full ",
};
 */
