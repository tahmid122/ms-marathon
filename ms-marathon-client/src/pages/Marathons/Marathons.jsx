import React, { useEffect, useState } from "react";
import MarathonCard from "./MarathonCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Marathons = () => {
  const axiosSecure = useAxiosSecure();
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();
  const [marathons, setMarathons] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    axiosSecure
      .get(`/all-marathons?email=${user.email}`)
      .then((res) => {
        if (res.data) {
          setMarathons(res.data);
          setIsLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [axiosSecure, user]);
  const handleSort = (e) => {
    const value = e.target.value;
    if (!e.target.value) return;
    setIsLoading(true);
    axiosSecure
      .get(`/all-marathons?sort=${value}&email=${user.email}`)
      .then((res) => {
        if (res.data) {
          setMarathons(res.data);
          setIsLoading(false);
          toast.success(
            e.target.value === "1"
              ? "Ascending Successful"
              : "Descending Successful"
          );
        }
      })
      .catch((error) => console.log(error));
  };
  if (isLoading) return <LoadingSpinner />;
  return (
    <>
      <Helmet>
        <title>All Marathons</title>
      </Helmet>
      <div className="w-11/12 mx-auto my-10">
        <div className="flex items-center justify-between">
          <h3 className="uppercase text-3xl font-bold italic dark:text-white">
            All Marathons
          </h3>
          <div>
            <div className="">
              <div className="relative">
                <select
                  className="w-full bg-transparent placeholder:text-slate-400  text-black text-sm border border-slate-200 rounded pl-3 pr-8 py-1.5 transition duration-300 ease focus:outline-none hover:border-[#422ad5] shadow-sm focus:shadow-md appearance-none cursor-pointer dark:text-white dark:bg-slate-900"
                  onChange={handleSort}
                >
                  <option value="">Sort By</option>
                  <option value="1">Ascending</option>
                  <option value="-1">Descending</option>
                </select>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.2"
                  stroke="currentColor"
                  className="h-5 w-5 ml-1 absolute top-2 right-2.5 text-slate-700"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 dark:text-white">
          {marathons?.map((marathon) => (
            <MarathonCard key={marathon._id} marathon={marathon} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Marathons;
