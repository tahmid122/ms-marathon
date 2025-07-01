import React from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ModeToggler from "../ModeToggler/ModeToggler";
const NavBar = () => {
  const { user, logoutUser, loading } = useAuth();
  const links = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/marathons"}>Marathons</NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink to={"/contact"}>Contact</NavLink>
      </li>
      {user ? (
        <>
          <li className="relative group/card hidden lg:block">
            <span>Dashboard</span>
            <ul className="absolute scale-0 group-hover/card:scale-100 transition-transform duration-500 left-0 top-10 text-start  bg-white w-[180px] p-1 rounded-md dark:bg-slate-900 dark:text-white dark:border dark:border-slate-600 ">
              <li>
                <NavLink to={"add-marathon"}>Add Marathon</NavLink>
              </li>
              <li>
                <NavLink to={"my-marathon-list"}>My Marathon List</NavLink>
              </li>
              <li>
                <NavLink to={"my-apply-list"}>My Apply List</NavLink>
              </li>
            </ul>
          </li>
          <>
            <li className="block lg:hidden">
              <NavLink to={"add-marathon"}>Add Marathon</NavLink>
            </li>
            <li className="block lg:hidden">
              <NavLink to={"my-marathon-list"}>My Marathon List</NavLink>
            </li>
            <li className="block lg:hidden">
              <NavLink to={"my-apply-list"}>My Apply List</NavLink>
            </li>
          </>
        </>
      ) : (
        ""
      )}
    </>
  );
  if (loading) {
    return <LoadingSpinner />;
  }
  const handleLogout = () => {
    logoutUser()
      .then(() => toast.success("Successfully Logout"))
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="lg:w-11/12 mx-auto sticky top-0 left-0 z-30">
      <ModeToggler />
      <div className="navbar bg-base-100 dark:bg-slate-900">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn lg:hidden dark:text-white dark:bg-slate-900 dark:border-none dark:shadow-xs dark:shadow-slate-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow dark:text-white dark:bg-slate-900"
            >
              {links}
            </ul>
          </div>
          <Link
            to={"/"}
            className="text-3xl font-bold items-center text-transparent hidden lg:flex bg-gradient-to-r from-[#422ad5]  to-black bg-clip-text dark:bg-gradient-to-r dark:from-white dark:to-[#422ad5]"
          >
            MS<span className="text-5xl">🏃</span> Marathon
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 dark:text-white">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          {user ? (
            <>
              <div className="avatar">
                <div className="mask mask-hexagon-2 w-12">
                  <img
                    src={user.photoURL}
                    alt="profileImage"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="btn bg-neutral text-white border border-slate-500 shadow-none btn-style"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to={"/login"}
                className="btn bg-primary text-white border-none shadow-none btn-style"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="btn bg-neutral text-white font-semibold border-none shadow-none btn-style"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
