import React, { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { getFormData } from "../../utils/getFormData";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import dateFormatter from "../../utils/dateFormatter";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const MarathonRegistration = () => {
  const [isLoading, setIsLoading] = useState(false);

  const axiosSecure = useAxiosSecure();
  const [marathon, setMaraThon] = useState({});
  const [marathonSDate, setMarathonSDate] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const handleRegistration = (e) => {
    e.preventDefault();
    const data = getFormData(e.target);
    data.marathonId = id;
    axiosSecure
      .post(`/participants?email=${user.email}`, data)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Registration successful");
          navigate(`/marathon/${id}`);
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    setIsLoading(true);
    axiosSecure
      .get(`/specific-marathons/?id=${id}&email=${user.email}`)
      .then((res) => {
        if (res.data) {
          setMaraThon(res.data);
          setMarathonSDate(dateFormatter(res.data.marathonStart));
          setIsLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [axiosSecure, id, user]);
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <div className="w-11/12 mx-auto my-10">
        <>
          <div className="my-5 w-11/12 mx-auto min-h-[75vh] flex items-center justify-center">
            <div className="flex min-h-full flex-col justify-center px-6  lg:px-8 w-full md:w-10/12 lg:w-6/12 mx-auto py-10 rounded shadow-sm shadow-slate-400 dark:shadow-xs dark:shadow-slate-500 card-style">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                  Marathon Registration
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form onSubmit={handleRegistration} className="space-y-6">
                  <div>
                    <label
                      htmlFor="title"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white "
                    >
                      Marathon Title
                    </label>
                    <div className="mt-2">
                      <input
                        id="title"
                        name="title"
                        type="text"
                        defaultValue={marathon.title}
                        readOnly
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="marathonStart"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white "
                    >
                      Marathon Start
                    </label>
                    <div className="mt-2">
                      <input
                        name="marathonStart"
                        type="text"
                        // defaultValue={dateFormatter(marathon.startDate)}
                        defaultValue={marathonSDate}
                        readOnly
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white "
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={user?.email}
                        readOnly
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="flex items-center md:flex-row flex-col justify-between gap-4">
                    <div className="w-full">
                      <label
                        htmlFor="firstName"
                        className="block text-sm/6 font-medium text-gray-900 dark:text-white "
                      >
                        First Name
                      </label>
                      <div className="mt-2">
                        <input
                          name="firstName"
                          type="text"
                          required
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="lastName"
                        className="block text-sm/6 font-medium text-gray-900 dark:text-white "
                      >
                        Last Name
                      </label>
                      <div className="mt-2">
                        <input
                          name="lastName"
                          type="text"
                          required
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex md:flex-row flex-col items-center justify-between gap-4">
                    <div className="w-full">
                      <label
                        htmlFor="gender"
                        className="block text-sm/6 font-medium text-gray-900 dark:text-white "
                      >
                        Gender
                      </label>
                      <div className="mt-2">
                        <select
                          name="gender"
                          type="text"
                          required
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="dob"
                        className="block text-sm/6 font-medium text-gray-900 dark:text-white "
                      >
                        Date of Birth
                      </label>
                      <div className="mt-2">
                        <input
                          name="dob"
                          type="date"
                          required
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="contactNumber"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white "
                    >
                      Contact Number
                    </label>
                    <div className="mt-2">
                      <input
                        name="contactNumber"
                        type="text"
                        required
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="btn w-full btn-style">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default MarathonRegistration;
