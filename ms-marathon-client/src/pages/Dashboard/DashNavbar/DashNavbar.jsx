import React from "react";
import { Link, NavLink } from "react-router";

const DashNavbar = ({ setIsTrue }) => {
  return (
    <div className="h-full px-5">
      <Link to={"/dashboard"} onClick={() => setIsTrue(false)}>
        <h3 className="text-2xl font-bold italic  text-transparent bg-gradient-to-r from-[#422ad5]  to-black bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-[#422ad5]">
          Dashboard
        </h3>
      </Link>
      <nav className="mt-10 dashNav">
        <ul className="text-sm space-y-2 dark:text-white">
          <li>
            <NavLink to={"add-marathon"} onClick={() => setIsTrue(false)}>
              Add Marathon
            </NavLink>
          </li>
          <li>
            <NavLink to={"my-marathon-list"} onClick={() => setIsTrue(false)}>
              My Marathon List
            </NavLink>
          </li>
          <li>
            <NavLink to={"my-apply-list"} onClick={() => setIsTrue(false)}>
              My Apply List
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashNavbar;
