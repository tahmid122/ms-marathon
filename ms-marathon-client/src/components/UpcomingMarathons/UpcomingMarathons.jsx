import React, { use } from "react";
import UpcomingCard from "./UpcomingCard";
import Title from "../Title/Title";
const UpcomingMarathons = ({ upcomingDataPromise }) => {
  const upcomingData = use(upcomingDataPromise);
  return (
    <div className="my-10 dark:bg-slate-900">
      <Title title={"Ready for race"} tagline={"Upcoming Marathons"} />
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-4 dark:text-white">
        {upcomingData?.map((data, index) => (
          <UpcomingCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingMarathons;
