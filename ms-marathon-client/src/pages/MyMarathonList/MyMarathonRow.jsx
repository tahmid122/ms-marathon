import React from "react";
import { FaPenClip, FaTrash } from "react-icons/fa6";
import { Link } from "react-router";
import dateFormatter from "../../utils/dateFormatter";

const MyMarathonRow = ({
  marathon,
  index,
  handleDelete,
  setSpecificMarathon,
  getRegisterdParticipants,
}) => {
  const {
    image,
    title,
    description,
    location,
    startDate,
    endDate,
    marathonStart,
    distance,
    totalRegistrationCount,
    _id,
  } = marathon;

  return (
    <>
      <tr className="border border-base-content/5 dark:border-slate-700">
        <th> {index + 1}</th>
        <td>
          <img className="h-14 w-14 object-cover rounded" src={image} alt="" />
        </td>
        <td title={title}>{title.slice(0, 20)}...</td>
        <td>
          {description.slice(0, 20)}
          <Link to={`/marathon/${_id}`} className="text-[#422ad5] font-xs">
            {" "}
            See more..
          </Link>
        </td>
        <td title={location}>{location.slice(0, 20)}...</td>
        <td>{dateFormatter(startDate)}</td>
        <td>{dateFormatter(endDate)}</td>
        <td>{dateFormatter(marathonStart)}</td>
        <td>{distance}</td>
        <td>
          {totalRegistrationCount}{" "}
          <button
            className="cursor-pointer text-[#422ad5] dark:text-white dark:font-bold"
            onClick={() => {
              getRegisterdParticipants(_id);
              document.getElementById("my_modal_2").showModal();
            }}
          >
            View
          </button>
        </td>
        <td className="flex items-center gap-3 justify-center mt-2">
          <span
            onClick={() => {
              document.getElementById("my_modal_4").showModal();
              setSpecificMarathon(marathon);
            }}
            className="p-2 btn-style rounded shadow-sm border border-slate-100 cursor-pointer dark:border-none dark:shadow-sm dark:shadow-slate-300"
            title="Update"
          >
            <FaPenClip size={18} />
          </span>
          <span
            onClick={() => handleDelete(_id)}
            className="p-2  rounded hover:bg-red-500 hover:text-white shadow-sm border border-slate-100 cursor-pointer dark:border-none dark:shadow-sm dark:shadow-slate-300"
            title="Delete"
          >
            <FaTrash size={18} />
          </span>
        </td>
      </tr>
    </>
  );
};

export default MyMarathonRow;
