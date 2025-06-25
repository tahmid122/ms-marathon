import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import setTheme from "../../utils/ThemeToggler";

const ModeToggler = () => {
  const theme = localStorage.getItem("theme");
  const [isTrue, setIsTrue] = useState(theme == "dark" ? true : false);
  const handleTheme = () => {
    setIsTrue(!isTrue);
    if (isTrue === true) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <div
      onClick={handleTheme}
      className={`border z-40 border-slate-300 dark:border-none dark:shadow-sm dark:btn-style dark:shadow-slate-500 ${
        isTrue ? "bg-slate-900 text-white" : "bg-white"
      } h-10 w-10 cursor-pointer flex items-center justify-center rounded-full fixed right-1 bottom-5 animate-bounce `}
    >
      {isTrue ? <FaSun size={20} /> : <FaMoon size={22} />}
    </div>
  );
};

export default ModeToggler;
