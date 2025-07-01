import React, { useState } from "react";
import { getFormData } from "../../utils/getFormData";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa6";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { motion } from "motion/react";

const AddMarathon = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [marathonStartDate, setMarathonStartDate] = useState(null);
  const handleAddMarathon = (e) => {
    e.preventDefault();
    const data = getFormData(e.target);
    data.createdAt = new Date();
    data.totalRegistrationCount = 0;
    data.participants = [];
    data.email = user.email;
    data.startDate = startDate;
    data.endDate = endDate;
    data.marathonStart = marathonStartDate;
    axiosSecure
      .post(`/marathons?email=${user.email}`, data)
      .then((res) => {
        if (res.data.insertedId) {
          toast.success("Successfully created marathon");
          navigate("/dashboard/my-marathon-list");
        }
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <>
      <div className="w-11/12 mx-auto py-5">
        <>
          <div className="w-11/12 mx-auto min-h-[75vh] flex items-center justify-center">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex border-t-4 border-t-[#422ad5] min-h-full flex-col justify-center px-6  lg:px-8 w-full md:w-10/12 lg:w-6/12 mx-auto py-10 rounded rounded-t-none shadow-sm shadow-slate-400 dark:shadow-xs dark:shadow-slate-500 card-style"
            >
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                  Add Marathon
                </h2>
              </div>

              <div className="mt-10">
                <form onSubmit={handleAddMarathon} className="space-y-6">
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
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <div className="flex items-center md:flex-row flex-col justify-between gap-4">
                    <div className="w-full">
                      <label
                        htmlFor="startDate"
                        className="block text-sm/6 font-medium text-gray-900 dark:text-white "
                      >
                        Registration Start
                      </label>
                      <div className="mt-2">
                        <DatePicker
                          name="startDate"
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-800 dark:placeholder:text-white focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                          showIcon
                          icon={
                            <FaCalendar className="text-black dark:text-white" />
                          }
                          required
                          selected={startDate}
                          placeholderText="mm/dd/yyyy"
                          onChange={(date) => setStartDate(date.getTime())}
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="endDate"
                        className="block text-sm/6 font-medium text-gray-900 dark:text-white "
                      >
                        Registration End
                      </label>
                      <div className="mt-2">
                        <DatePicker
                          name="endDate"
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-800 dark:placeholder:text-white  focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                          showIcon
                          icon={
                            <FaCalendar className="text-black dark:text-white" />
                          }
                          required
                          selected={endDate}
                          placeholderText="mm/dd/yyyy"
                          onChange={(date) => setEndDate(date.getTime())}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center md:flex-row flex-col justify-between gap-4">
                    <div className="w-full">
                      <label
                        htmlFor="marathonStart"
                        className="block text-sm/6 font-medium text-gray-900 dark:text-white "
                      >
                        Marathon Start
                      </label>
                      <div className="mt-2">
                        <DatePicker
                          name="marathonStart"
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-800 dark:placeholder:text-white focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                          showIcon
                          icon={
                            <FaCalendar className="text-black dark:text-white" />
                          }
                          required
                          selected={marathonStartDate}
                          placeholderText="mm/dd/yyyy"
                          onChange={(date) =>
                            setMarathonStartDate(date.getTime())
                          }
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="distance"
                        className="block text-sm/6 font-medium text-gray-900 dark:text-white "
                      >
                        Running Distance
                      </label>
                      <div className="mt-2">
                        <select
                          name="distance"
                          type="date"
                          required
                          className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                        >
                          <option value="not-mentioned">Select One</option>
                          <option value="25k">25k</option>
                          <option value="10k">10k</option>
                          <option value="3k">3k</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white "
                    >
                      Location
                    </label>
                    <div className="mt-2">
                      <input
                        name="location"
                        type="text"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="image"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white "
                    >
                      Marathon Image
                    </label>
                    <div className="mt-2">
                      <input
                        name="image"
                        type="text"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm/6 font-medium text-gray-900 dark:text-white "
                    >
                      Marathon Description
                    </label>
                    <div className="mt-2">
                      <textarea
                        name="description"
                        type="text"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white min-h-[150px] resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <div>
                    <button type="submit" className="btn btn-style w-full">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      </div>
    </>
  );
};

export default AddMarathon;
