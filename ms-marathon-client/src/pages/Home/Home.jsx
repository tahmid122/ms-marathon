import React from "react";
import Banner from "../../components/Banner/Banner";
import { useLoaderData } from "react-router";

import Destination from "../../components/Destination/Destination";
import Calender from "../../components/Calender/Calender";
import MarathonHome from "../../components/MarathonHome/MarathonHome";
import UpcomingMarathons from "../../components/UpcomingMarathons/UpcomingMarathons";
const upcomingDataPromise = fetch("/upcomingData.json").then((res) =>
  res.json()
);
const Home = () => {
  const bannerData = useLoaderData();
  return (
    <>
      <div className="w-11/12 mx-auto my-10">
        <Banner bannerData={bannerData} />
        <MarathonHome />
        <UpcomingMarathons upcomingDataPromise={upcomingDataPromise} />
        <Destination />
        <Calender />
      </div>
    </>
  );
};

export default Home;
