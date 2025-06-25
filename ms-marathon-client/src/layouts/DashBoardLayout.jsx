import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import DashNavbar from "../pages/Dashboard/DashNavbar/DashNavbar";
import { FaBars, FaXmark } from "react-icons/fa6";
import setTheme from "../utils/ThemeToggler";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const DashBoardLayout = () => {
  const navigation = useNavigation();
  const [isTrue, setIsTrue] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setTheme(theme);
  }, []);
  return (
    <>
      {navigation.state !== "idle" && <LoadingSpinner />}
      <div className="dark:bg-slate-900 bg-white">
        <NavBar />
        <span
          className="flex justify-end lg:hidden cursor-pointer px-2.5 pb-2"
          onClick={() => setIsTrue(!isTrue)}
        >
          {isTrue ? (
            <FaXmark size={20} className="dark:text-white" />
          ) : (
            <FaBars size={20} className="dark:text-white" />
          )}
        </span>
        <div className="min-h-screen relative flex gap-4">
          <div
            className={`py-5 bg-white dark:bg-slate-900 z-10 border-r border-r-slate-200 dark:border-r-slate-700 ${
              isTrue ? "-translate-x-0" : "-translate-x-full"
            } lg:-translate-x-0 absolute lg:relative h-full lg:h-auto transition-all duration-500`}
          >
            <DashNavbar setIsTrue={setIsTrue} />
          </div>
          <div className="grow overflow-x-auto">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DashBoardLayout;
