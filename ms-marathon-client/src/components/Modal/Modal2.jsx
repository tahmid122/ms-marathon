import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendar } from "react-icons/fa6";
import { getFormData } from "../../utils/getFormData";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const Modal2 = ({ setSpecificMarathon, specificMarathon, getMarathonList }) => {
  const [marathon, setMarathon] = useState({
    description: "",
    distance: "",
    endDate: "",
    image: "",
    location: "",
    marathonStart: "",
    startDate: "",
    title: "",
  });
  const { user } = useAuth();
  const [isTrue, setIsTrue] = useState(false);

  const buttonRef = useRef();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [marathonStartDate, setMarathonStartDate] = useState(null);
  useEffect(() => {
    setMarathon(specificMarathon);
    setStartDate(specificMarathon.startDate);
    setEndDate(specificMarathon.endDate);
    setMarathonStartDate(specificMarathon.marathonStart);
  }, [specificMarathon]);
  const handleUpdate = (e) => {
    setIsTrue(true);
    e.preventDefault();
    const formData = getFormData(e.target);
    formData.startDate = startDate;
    formData.endDate = endDate;
    formData.marathonStart = marathonStartDate;
    axiosSecure
      .put(`/marathons?id=${marathon._id}&email=${user.email}`, formData)
      .then((res) => {
        setIsTrue(false);
        if (res.data.modifiedCount) {
          toast.success("Successfully Updated");
          setSpecificMarathon({});
          setMarathon({
            description: "",
            distance: "",
            endDate: "",
            image: "",
            location: "",
            marathonStart: "",
            startDate: "",
            title: "",
          });
          buttonRef.current.click();
          getMarathonList(user.email);
        } else {
          buttonRef.current.click();
          toast.error("You did'nt update anything!");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:shadow-xs dark:shadow-slate-500 dark:border dark:border-slate-500 card-style h-[90vh]">
          <form method="dialog">
            <button
              ref={buttonRef}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 dark:text-white dark:hover:text-white dark:hover:bg-slate-900"
            >
              ✕
            </button>
          </form>
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
              Update Marathon
            </h2>
          </div>
          <form onSubmit={handleUpdate} className="space-y-6">
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
                  value={marathon.title || ""}
                  onChange={(e) =>
                    setMarathon({ ...marathon, title: e.target.value })
                  }
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
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white dark:placeholder:text-white"
                    showIcon
                    icon={<FaCalendar className="text-black dark:text-white" />}
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
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white dark:placeholder:text-white"
                    showIcon
                    icon={<FaCalendar className="text-black dark:text-white" />}
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
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white dark:placeholder:text-white"
                    showIcon
                    icon={<FaCalendar className="text-black dark:text-white" />}
                    required
                    selected={marathonStartDate}
                    placeholderText="mm/dd/yyyy"
                    onChange={(date) => {
                      setMarathonStartDate(date.getTime());
                    }}
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
                  {marathon.distance && (
                    <select
                      name="distance"
                      type="date"
                      required
                      value={marathon.distance}
                      onChange={(e) =>
                        setMarathon({ ...marathon, distance: e.target.value })
                      }
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                    >
                      <option value="not-mentioned">Select One</option>
                      <option value="25k">25k</option>
                      <option value="10k">10k</option>
                      <option value="3k">3k</option>
                    </select>
                  )}
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
                  value={marathon.location || ""}
                  onChange={(e) =>
                    setMarathon({ ...marathon, location: e.target.value })
                  }
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
                  value={marathon.image || ""}
                  onChange={(e) =>
                    setMarathon({ ...marathon, image: e.target.value })
                  }
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
                  value={marathon.description}
                  onChange={(e) =>
                    setMarathon({ ...marathon, description: e.target.value })
                  }
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white min-h-[150px] resize-none"
                ></textarea>
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-style w-full">
                {isTrue ? (
                  <span className="loading loading-spinner loading-md"></span>
                ) : (
                  "Update"
                )}
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal2;
