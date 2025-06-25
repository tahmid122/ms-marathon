import React from "react";
import dateFormatter from "../../utils/dateFormatter";

const DetailsCard = ({ marathon }) => {
  const {
    _id,
    title,
    startDate,
    endDate,
    marathonStart,
    location,
    distance,
    description,
  } = marathon;
  return (
    <div>
      <div className="mt-5 overflow-hidden dark:text-white">
        <h3 className="uppercase font-bold text-2xl">{title}</h3>
        <p className="text-lg text-slate-600 font-medium dark:text-white">
          Registration Start: {dateFormatter(startDate)}
        </p>
        <p className="text-lg text-slate-600 font-medium dark:text-white">
          Registration Ends: {dateFormatter(endDate)}
        </p>
        <p className="text-lg text-slate-600 font-medium dark:text-white">
          Marathon Start: {dateFormatter(marathonStart)}
        </p>
        <p className="text-lg text-slate-600 font-medium dark:text-white">
          Location: {location}
        </p>
        <p className="text-lg text-slate-600 font-medium dark:text-white">
          Distance: {distance}
        </p>
      </div>
      <div>
        <p className="text-base mt-5 text-justify lg:w-10/12">{description}</p>
      </div>
    </div>
  );
};

export default DetailsCard;
