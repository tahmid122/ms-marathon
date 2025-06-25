import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { getFormData } from "../../utils/getFormData";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import dateFormatter from "../../utils/dateFormatter";

const Modal = ({
  specificApplyData,
  setSpecificApplyData,
  getApplications,
}) => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const buttonRef = useRef();
  const [application, setApplication] = useState({
    contactNumber: "",
    dob: "",
    email: "",
    firstName: "",
    gender: "",
    image: "",
    lastName: "",
    marathonId: "",
    marathonStart: "",
    title: "",
  });
  const [gender, setGender] = useState(application.gender);
  useEffect(() => {
    setApplication(specificApplyData);
    setGender(specificApplyData.gender);
  }, [specificApplyData]);
  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedApplication = getFormData(e.target);
    axiosSecure
      .put(
        `/participants?id=${application._id}&email=${user.email}`,
        updatedApplication
      )
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success("Successfully Updated");
          setSpecificApplyData({});
          setApplication({
            contactNumber: "",
            dob: "",
            email: "",
            firstName: "",
            gender: "",
            image: "",
            lastName: "",
            marathonId: "",
            startDate: "",
            title: "",
          });
          buttonRef.current.click();
          getApplications(user.email);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
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
              Update Applied Marathon
            </h2>
          </div>
          <form onSubmit={handleUpdate} className="space-y-6 mt-5">
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
                  defaultValue={application.title}
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
                {application.marathonStart && (
                  <input
                    name="marathonStart"
                    type="text"
                    defaultValue={dateFormatter(application?.marathonStart)}
                    readOnly
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  />
                )}
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
                  defaultValue={application.email}
                  readOnly
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
                    value={application.firstName || ""}
                    onChange={(e) =>
                      setApplication({
                        ...application,
                        firstName: e.target.value,
                      })
                    }
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
                    value={application.lastName || ""}
                    onChange={(e) =>
                      setApplication({
                        ...application,
                        lastName: e.target.value,
                      })
                    }
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
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
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
                    value={application.dob || ""}
                    onChange={(e) =>
                      setApplication({ ...application, dob: e.target.value })
                    }
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
                  value={application.contactNumber || ""}
                  onChange={(e) =>
                    setApplication({
                      ...application,
                      contactNumber: e.target.value,
                    })
                  }
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                />
              </div>
            </div>
            <div>
              <button type="submit" className="btn btn-style w-full">
                Update
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
