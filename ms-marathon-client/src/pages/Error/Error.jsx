import React, { useEffect } from "react";
import Lottie from "lottie-react";
import notFoundAnimation from "../../assets/notfound.json";
import { Link } from "react-router";
import setTheme from "../../utils/ThemeToggler";
const Error = () => {
  useEffect(() => {
    document.title = "Page not found";
    const theme = localStorage.getItem("theme");
    setTheme(theme);
  }, []);
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col dark:bg-slate-900">
      <Lottie animationData={notFoundAnimation} loop={true} />
      <Link to={"/"}>
        <button className="btn shadow-none btn-style">Back to home</button>
      </Link>
    </div>
  );
};

export default Error;
