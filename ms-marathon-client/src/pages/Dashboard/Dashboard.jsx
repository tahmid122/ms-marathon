import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [data, setData] = useState({});
  useEffect(() => {
    setIsLoading(true);
    axiosSecure
      .get(`/total-numbers?email=${user.email}`)
      .then((res) => {
        if (res.data) {
          setData(res.data);
          setIsLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [user, axiosSecure]);
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="p-5 lg:p-0">
        <div className="flex items-center flex-col gap-5 justify-center lg:w-1/2 mx-auto p-5 shadow dark:shadow-xs dark:shadow-slate-500 card-style rounded">
          <div className="flex items-center justify-center flex-col gap-3">
            <img
              className="rounded-full h-20 w-20"
              src={user?.photoURL}
              alt="image"
            />
            <h3 className="text-xl font-semibold dark:text-white ">
              {user?.displayName}
            </h3>
          </div>
          <div className="stats shadow dark:shadow-xs dark:shadow-slate-500 dark:text-white">
            <div className="stat place-items-center">
              <div className="stat-title dark:text-white">Marathons</div>
              <div className="stat-value">{data.marathons}</div>
              <div className="stat-desc dark:text-white">Created by me</div>
            </div>

            <div className="stat place-items-center dark:text-white">
              <div className="stat-title dark:text-white">Applications</div>
              <div className="stat-value text-primary dark:text-white">
                {data.applications}
              </div>
              <div className="stat-desc text-primary dark:text-white">
                Applied to join
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
