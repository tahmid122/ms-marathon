import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router";
import dateFormatter from "../../utils/dateFormatter";

const MarathonCard = ({ marathon }) => {
  const { title, startDate, endDate, location, distance, _id, image } =
    marathon;
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className="rounded dark:shadow-xs dark:shadow-slate-500 card-style"
    >
      <div>
        <img
          className="h-[200px] w-full object-cover"
          src={image}
          alt="image"
        />
      </div>
      <div className="mt-5 overflow-hidden dark:p-2">
        <h3 className="uppercase font-bold text-xl">{title}</h3>
        <p className="text-sm text-slate-600 font-medium dark:text-white">
          Registration Start: {dateFormatter(startDate)}
        </p>
        <p className="text-sm text-slate-600 font-medium dark:text-white">
          Registration End: {dateFormatter(endDate)}
        </p>
        <p className="text-sm text-slate-600 font-medium dark:text-white">
          Location: {location}
        </p>
        <p className="text-sm text-slate-600 font-medium dark:text-white">
          Distance: {distance}
        </p>
        <Link to={`/marathon/${_id}`}>
          <button className="btn btn-style flex items-center  justify-center overflow-hidden group relative mt-2 h-8">
            <span className="-translate-x-full group-hover:-translate-x-0 bg-amber-700 h-full w-full absolute top-0 left-0 z-10 flex items-center justify-center transition-all duration-300 btn-style">
              <FaArrowRightLong size={20} />
            </span>
            <span className="uppercase">See details</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MarathonCard;
