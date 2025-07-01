import React from "react";

const UpcomingCard = ({ data }) => {
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className="dark:shadow-xs dark:shadow-slate-500 rounded card-style"
    >
      <div>
        <img
          className="h-[250px] w-full object-cover"
          src={data.image}
          alt="image"
        />
      </div>
      <div className="mt-5 overflow-hidden md:pr-5 dark:p-2">
        <h3 className="uppercase font-bold text-xl">{data.title}</h3>
        <p className="text-sm text-slate-600 font-medium dark:text-white dark:font-normal">
          <span className="font-semibold">Registration Starts: </span>
          {data.rs}
        </p>
        <p className="text-sm text-slate-600 font-medium dark:text-white dark:font-normal">
          <span className="font-semibold">Registration Ends: </span>
          {data.re}
        </p>
        <p className="text-sm text-slate-600 font-medium dark:text-white dark:font-normal">
          <span className="font-semibold">Marathon Start: </span> {data.ms}
        </p>

        <p className="text-sm text-slate-600 font-medium dark:text-white dark:font-normal">
          <span className="font-semibold">Location: </span> {data.location}
        </p>
        <p className="text-sm text-slate-600 font-medium dark:text-white dark:font-normal">
          <span className="font-semibold">Distance: </span> {data.distance}
        </p>
        <p className="text-[13px] text-slate-600 font-medium mt-5 text-justify dark:text-white dark:font-normal">
          {data.details}
        </p>
      </div>
    </div>
  );
};

export default UpcomingCard;
