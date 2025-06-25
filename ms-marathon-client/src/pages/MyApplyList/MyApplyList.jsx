import React, { useEffect, useState } from "react";
import MyApplyListRow from "./MyApplyListRow";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import Modal from "../../components/Modal/Modal";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const MyApplyList = () => {
  const [isLoading, setIsLoading] = useState(false);

  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [applyList, setApplyList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isTrue, setIsTrue] = useState(false);
  //
  const [specificApplyData, setSpecificApplyData] = useState({});
  //
  const getApplications = (email) => {
    setIsLoading(true);
    axiosSecure
      .get(`/participants?email=${email}`)
      .then((res) => {
        {
          if (res.data) {
            setApplyList(res.data);
            setIsLoading(false);
          }
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    setIsLoading(true);
    axiosSecure
      .get(`/participants?email=${user.email}`)
      .then((res) => {
        if (res.data) {
          setApplyList(res.data);
          setIsLoading(false);
        }
      })
      .catch((error) => console.log(error));
  }, [user, axiosSecure]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/participants?id=${id}&email=${user.email}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const filteredData = applyList.filter(
                (marathon) => marathon._id !== id
              );
              setApplyList(filteredData);
              toast.success("Successfully Deleted");
            }
          });
      }
    });
  };
  const handleSearch = (e) => {
    e.preventDefault();
    setIsTrue(true);
    axiosSecure
      .get(`/participants?search=${e.target.value}&email=${user.email}`)
      .then((res) => {
        setApplyList(res.data);
      })
      .catch((error) => console.log(error));
  };
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>My Apply List</title>
      </Helmet>
      <div className="mb-10 text-center">
        <form className="w-11/12 mx-auto md:w-6/12 lg:w-2/6">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => {
                handleSearch(e);
                setSearchQuery(e.target.value);
              }}
              className="block w-full p-4 ps-10 text-sm rounded-lg bg-white text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
              placeholder="Search..."
              required
            />
            <span
              onClick={() => {
                if (searchQuery) {
                  setSearchQuery("");
                  getApplications(user.email);
                  setIsTrue(false);
                }
              }}
              className="text-white absolute end-2.5 bottom-2.5 rounded-lg text-sm px-4 py-2 font-medium bg-gradient-to-br from-[#422ad5] via-red-700  to-black dark:shadow dark:shadow-slate-500 border-none cursor-pointer"
            >
              Reset
            </span>
          </div>
        </form>
      </div>
      {applyList.length > 0 ? (
        <div>
          <table className="table dark:text-white">
            {/* head */}
            <thead className="dark:text-white">
              <tr>
                <th>Serial</th>
                <th>Photo</th>
                <th>Title</th>
                <th>Marathon Start</th>
                <th>Email</th>
                <th>Name</th>
                <th>Gender</th>
                <th>DOB</th>
                <th>Contact</th>
                <th>View</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {applyList.map((apply, index) => (
                <MyApplyListRow
                  key={apply._id}
                  apply={apply}
                  index={index}
                  handleDelete={handleDelete}
                  //
                  setSpecificApplyData={setSpecificApplyData}
                />
              ))}
            </tbody>
          </table>
          <Modal
            specificApplyData={specificApplyData}
            setSpecificApplyData={setSpecificApplyData}
            getApplications={getApplications}
          />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-3 h-[50vh]">
          {isTrue ? (
            <h2 className="text-xl font-semibold dark:text-white">
              No results found{" "}
            </h2>
          ) : (
            <>
              <h2 className="text-xl font-semibold dark:text-white">
                You did'nt apply for any marathon
              </h2>
              <Link to={"/marathons"}>
                <button className="btn btn-style">Explore Marathons</button>
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default MyApplyList;
