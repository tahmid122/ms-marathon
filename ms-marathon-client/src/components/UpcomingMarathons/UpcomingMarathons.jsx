import React, { use } from "react";
import UpcomingCard from "./UpcomingCard";

const UpcomingMarathons = ({ upcomingDataPromise }) => {
  const upcomingData = use(upcomingDataPromise);
  return (
    <div className="my-10 dark:bg-slate-900">
      <div>
        <span className="uppercase text-primary text-xs font-semibold dark:text-white">
          Upcoming Marathons
        </span>
        <h3 className="uppercase text-3xl font-bold italic dark:text-white">
          Ready for race
        </h3>
      </div>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 dark:text-white">
        {upcomingData?.map((data, index) => (
          <UpcomingCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMarathons;
