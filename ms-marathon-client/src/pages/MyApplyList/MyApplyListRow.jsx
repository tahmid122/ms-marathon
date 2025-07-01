import React from "react";
import { FaPenClip, FaTrash } from "react-icons/fa6";
import { Link } from "react-router";
import dateFormatter from "../../utils/dateFormatter";

const MyApplyListRow = ({
  apply,
  index,
  handleDelete,
  setSpecificApplyData,
}) => {
  const {
    marathonStart,
    dob,
    contactNumber,
    firstName,
    lastName,
    gender,
    email,
    marathonId,
    title,
    image,
    _id,
  } = apply;
  return (
    <>
      <tr className="border border-base-content/5 dark:border-slate-700">
        <th> {index + 1}</th>
        <td>
          <img className="h-14 w-14 object-cover rounded" src={image} alt="" />
        </td>
        <td title={title}>{title.slice(0, 20)}...</td>
        <td>{dateFormatter(marathonStart)}</td>
        <td>{email}</td>
        <td>{firstName + " " + lastName}</td>
        <td>{gender}</td>
        <td>{dob}</td>
        <td>{contactNumber}</td>
        <td>
          <Link
            to={`/marathon/${marathonId}`}
            className="text-primary dark:font-bold"
          >
            View
          </Link>
        </td>
        <td className="flex items-center gap-3 justify-center mt-2">
          <span
            onClick={() => {
              document.getElementById("my_modal_3").showModal();
              setSpecificApplyData(apply);
            }}
            className="p-2 hover:bg-primary hover:text-white  rounded shadow-sm border border-slate-100 cursor-pointer dark:border-none dark:shadow-sm dark:shadow-slate-300 btn-style"
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

export default MyApplyListRow;
