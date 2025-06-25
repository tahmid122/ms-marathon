import React, { useEffect } from "react";
import { Outlet, useNavigation } from "react-router";
import NavBar from "../components/Navbar/NavBar";
import Footer from "../components/Footer/Footer";
import setTheme from "../utils/ThemeToggler";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const RootLayout = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    setTheme(theme);
  }, []);
  return (
    <>
      {navigation.state !== "idle" && <LoadingSpinner />}
      <div className="dark:bg-slate-900 bg-white">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
