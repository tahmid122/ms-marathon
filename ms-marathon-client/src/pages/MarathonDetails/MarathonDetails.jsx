import React, { useEffect } from "react";
import Counter from "../../components/Counter/Counter";
import { Link, useParams } from "react-router";
import DetailsCard from "./DetailsCard";
import useAuth from "../../hooks/useAuth";
import { FaExclamationCircle } from "react-icons/fa";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { FaArrowLeftLong } from "react-icons/fa6";
const MarathonDetails = () => {
  const axiosSecure = useAxiosSecure();
  const [isLoading, setIsLoading] = useState(false);

  const [marathon, setMaraThon] = useState({});
  const { id } = useParams();
  const [message, setMessage] = useState(null);
  const { user } = useAuth();
  const {
    image,
    _id,
    totalRegistrationCount,
    startDate,
    endDate,
    participants,
    marathonStart,
  } = marathon;
  useEffect(() => {
    setIsLoading(true);
    axiosSecure
      .get(`/specific-marathons/?id=${id}&email=${user.email}`)
      .then((res) => {
        if (res.data) {
          setMaraThon(res.data);
          setIsLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [axiosSecure, id, user]);
  useEffect(() => {
    const today = new Date().getTime();
    if (today > endDate) {
      setMessage("Registration is over");
    } else if (today < startDate) {
      setMessage("Registration is not started yet");
    } else if (today >= marathonStart) {
      setMessage("Marathon is running/ended");
    } else {
      setMessage(null);
    }
  }, [startDate, endDate, marathonStart]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <div className="w-11/12 mx-auto my-10 dark:text-white">
        <Link to={-1} className=" my-2 flex items-center gap-1">
          <FaArrowLeftLong /> Back
        </Link>
        <div className="">
          <img
            className="w-full h-[300px] lg:h-[500px]"
            src={image}
            alt="image"
          />
          <div className="bg-white rounded-xl shadow-md w-11/12 mx-auto lg:h-[200px] -translate-y-24 lg:flex items-center justify-between p-10 dark:shadow-xs dark:shadow-slate-500 card-style">
            <div className="flex lg:flex-row flex-col items-center gap-5">
              <h3 className="text-xl font-bold">Starts In:</h3>
              {marathonStart && <Counter marathonStart={marathonStart} />}
            </div>
            <div className="space-y-4 mt-5 lg:mt-0 text-center lg:text-start">
              <p className="text-xl font-semibold ">
                Total Registration: {totalRegistrationCount}
              </p>
              {participants?.includes(user?.email) ? (
                <button className="btn btn-style" disabled={true}>
                  Already Registered
                </button>
              ) : (
                <>
                  {message ? (
                    <p className=" bg-gradient-to-br from-[#422ad5] via-red-700  to-black text-white border-none  dark:shadow dark:shadow-slate-500 flex items-center gap-1 justify-center text-sm p-2 cursor-no-drop">
                      <FaExclamationCircle size={20} />
                      {message}
                    </p>
                  ) : (
                    <Link to={`/marathon-registration/${_id}`}>
                      <button className="btn btn-style">Register</button>
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
        <DetailsCard marathon={marathon} />
      </div>
    </>
  );
};

export default MarathonDetails;
