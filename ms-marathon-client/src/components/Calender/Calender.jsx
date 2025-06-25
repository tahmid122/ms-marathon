import React from "react";

const Calender = () => {
  return (
    <div className="my-10 dark:bg-slate-900">
      <div>
        <span className="uppercase text-primary text-xs font-semibold dark:text-white">
          Should it rain or snow
        </span>
        <h3 className="uppercase text-3xl font-bold italic dark:text-white">
          Calendar of races
        </h3>
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center justify-center shadow border border-slate-200 py-5 cursor-pointer dark:shadow-xs dark:shadow-slate-500 dark:border-none card-style">
          <span className="font-bold dark:text-white">January</span>
          <span className="text-sm text-slate-500 underline">102 races</span>
        </div>
        <div className="flex flex-col items-center justify-center shadow border border-slate-200 py-5 cursor-pointer dark:shadow-xs dark:shadow-slate-500 dark:border-none card-style">
          <span className="font-bold dark:text-white">February</span>
          <span className="text-sm text-slate-500 underline">96 races</span>
        </div>
        <div className="flex flex-col items-center justify-center shadow border border-slate-200 py-5 cursor-pointer dark:shadow-xs dark:shadow-slate-500 dark:border-none card-style">
          <span className="font-bold dark:text-white">March</span>
          <span className="text-sm text-slate-500 underline">300 races</span>
        </div>
        <div className="flex flex-col items-center justify-center shadow border border-slate-200 py-5 cursor-pointer dark:shadow-xs dark:shadow-slate-500 dark:border-none card-style">
          <span className="font-bold dark:text-white">April</span>
          <span className="text-sm text-slate-500 underline">215 races</span>
        </div>
        <div className="flex flex-col items-center justify-center shadow border border-slate-200 py-5 cursor-pointer dark:shadow-xs dark:shadow-slate-500 dark:border-none card-style">
          <span className="font-bold dark:text-white">May</span>
          <span className="text-sm text-slate-500 underline">12 races</span>
        </div>
        <div className="flex flex-col items-center justify-center shadow border border-slate-200 py-5 cursor-pointer dark:shadow-xs dark:shadow-slate-500 dark:border-none card-style">
          <span className="font-bold dark:text-white">June</span>
          <span className="text-sm text-slate-500 underline">1,034 races</span>
        </div>
        <div className="flex flex-col items-center justify-center shadow border border-slate-200 py-5 cursor-pointer dark:shadow-xs dark:shadow-slate-500 dark:border-none card-style">
          <span className="font-bold dark:text-white">July</span>
          <span className="text-sm text-slate-500 underline">487 races</span>
        </div>
        <div className="flex flex-col items-center justify-center shadow border border-slate-200 py-5 cursor-pointer dark:shadow-xs dark:shadow-slate-500 dark:border-none card-style">
          <span className="font-bold dark:text-white">August</span>
          <span className="text-sm text-slate-500 underline">798 races</span>
        </div>
        <div className="flex flex-col items-center justify-center shadow border border-slate-200 py-5 cursor-pointer dark:shadow-xs dark:shadow-slate-500 dark:border-none card-style">
          <span className="font-bold dark:text-white">September</span>
          <span className="text-sm text-slate-500 underline">365 races</span>
        </div>
        <div className="flex flex-col items-center justify-center shadow border border-slate-200 py-5 cursor-pointer dark:shadow-xs dark:shadow-slate-500 dark:border-none card-style">
          <span className="font-bold dark:text-white">October</span>
          <span className="text-sm text-slate-500 underline">468 races</span>
        </div>
        <div className="flex flex-col items-center justify-center shadow border border-slate-200 py-5 cursor-pointer dark:shadow-xs dark:shadow-slate-500 dark:border-none card-style">
          <span className="font-bold dark:text-white">November</span>
          <span className="text-sm text-slate-500 underline">695 races</span>
        </div>
        <div className="flex flex-col items-center justify-center shadow border border-slate-200 py-5 cursor-pointer dark:shadow-xs dark:shadow-slate-500 dark:border-none card-style">
          <span className="font-bold dark:text-white">December</span>
          <span className="text-sm text-slate-500 underline">4,215 races</span>
        </div>
      </div>
    </div>
  );
};

export default Calender;
