import React from "react";
import MarathonCard from "./MarathonCard";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import Title from "../Title/Title";

const MarathonHome = () => {
  const [marathons, setMarathons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://m11-assignment11-server.vercel.app/limited-marathons?limit=6",
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setMarathons(data);
        setIsLoading(false);
      });
  }, []);
  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="my-10 dark:bg-slate-900 dark:text-white">
      <Title title={"Races abroad"} tagline={"Our favorites"} />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {marathons?.map((marathon) => (
          <MarathonCard key={marathon._id} marathon={marathon} />
        ))}
      </div>
    </div>
  );
};

export default MarathonHome;
