import React from "react";
import { ripples } from "ldrs";
ripples.register();
const LoadingSpinner = () => {
  return (
    <div className="fixed top-0 left-0 h-full w-full flex items-center justify-center z-30 bg-white dark:bg-slate-900">
      <l-ripples size="100" speed="3" color="#422ad5"></l-ripples>
    </div>
  );
};

export default LoadingSpinner;
