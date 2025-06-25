import React, { useEffect, useState } from "react";
import MyMarathonRow from "./MyMarathonRow";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import Modal from "../../components/Modal/Modal";
import Modal2 from "../../components/Modal/Modal2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router";
import { Helmet } from "react-helmet-async";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const MyMarathonList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const axiosSecure = useAxiosSecure();
  const [marathonList, setMarathonList] = useState([]);
  const [specificMarathon, setSpecificMarathon] = useState({});
  const { user } = useAuth();
  const getMarathonList = (email) => {
    setIsLoading(true);
    axiosSecure
      .get(`/marathons?email=${email}`)
      .then((res) => {
        if (res.data) {
          setMarathonList(res.data);
          setIsLoading(false);
        }
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    setIsLoading(true);
    axiosSecure
      .get(`/marathons?email=${user.email}`)
      .then((res) => {
        if (res.data) {
          setMarathonList(res.data);
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
          .delete(`/marathons?id=${id}&email=${user.email}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const filteredData = marathonList.filter(
                (marathon) => marathon._id !== id
              );
              setMarathonList(filteredData);
              toast.success("Successfully Deleted");
            }
          });
      }
    });
  };
  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>My Marathon List</title>
      </Helmet>
      {marathonList.length > 0 ? (
        <div>
          <table className="table w-full dark:text-white text-center">
            {/* head */}
            <thead className="dark:text-white">
              <tr>
                <th>Serial</th>
                <th>Photo</th>
                <th>Title</th>
                <th>Description</th>
                <th>Location</th>
                <th>Registration Start</th>
                <th>Registration End</th>
                <th>Marathon Start</th>
                <th>Distance</th>
                <th>Total Registration</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {marathonList.map((marathon, index) => (
                <MyMarathonRow
                  key={marathon._id}
                  marathon={marathon}
                  index={index}
                  handleDelete={handleDelete}
                  setSpecificMarathon={setSpecificMarathon}
                />
              ))}
            </tbody>
          </table>
          <div>
            <Modal2
              specificMarathon={specificMarathon}
              setSpecificMarathon={setSpecificMarathon}
              getMarathonList={getMarathonList}
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-3 h-[50vh]">
          <h2 className="text-xl font-semibold dark:text-white">
            You did'nt create any marathon
          </h2>
          <Link to={"/dashboard/add-marathon"}>
            <button className="btn btn-style">Create Marathon</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default MyMarathonList;
