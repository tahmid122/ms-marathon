/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { IoMdEyeOff, IoMdEye } from "react-icons/io";
import useAuth from "../../hooks/useAuth";
import { getFormData } from "../../utils/getFormData";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import registerAnimation from "../../assets/register.json";
import Lottie from "lottie-react";

const Register = () => {
  const [show, setShow] = useState(false);
  const { createUser, updateUser, setLoading, user, setUser } = useAuth();
  const navigate = useNavigate();
  const handleRegistration = (e) => {
    e.preventDefault();
    const data = getFormData(e.target);
    const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!regex.test(data.password)) {
      toast.error(
        "Password must have one uppercase, one lowercase and at least 6 characters"
      );
      return;
    }
    createUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          setUser({ ...user, photoURL: data.photoURL });
          toast.success("Registration Successful");
          updateUser(data.name, data.photoURL)
            .then(() => toast.success("Profile Updated"))
            .catch((error) => toast.error(error.message));
          navigate("/");
        }
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="my-5 w-full lg:w-11/12 mx-auto min-h-[75vh] flex items-center justify-center gap-10 flex-col-reverse lg:flex-row overflow-hidden p-3">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="flex min-h-full flex-col justify-center px-6  lg:px-8 w-[450px] mx-auto py-10 rounded shadow-sm shadow-slate-400 dark:shadow-xs dark:shadow-slate-500 card-style"
        >
          <div className="">
            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
              Register
            </h2>
          </div>

          <div className="mt-10">
            <form onSubmit={handleRegistration} className="space-y-6">
              <div>
                <label
                  htmlFor="Name"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    name="name"
                    type="text"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white "
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="photoURL"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Photo URL
                </label>
                <div className="mt-2">
                  <input
                    name="photoURL"
                    type="text"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white "
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2 relative">
                  <input
                    id="password"
                    name="password"
                    type={show ? "text" : "password"}
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-2 top-2 cursor-pointer dark:text-white"
                  >
                    {show ? <IoMdEyeOff size={20} /> : <IoMdEye size={20} />}
                  </span>
                </div>
              </div>

              <div>
                <button type="submit" className="btn btn-style w-full">
                  Register
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Already have an account?
              <Link
                to={"/login"}
                className="font-semibold text-primary dark:text-white"
              >
                Login
              </Link>
            </p>
          </div>
        </motion.div>
        <div
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex-1 w-full"
        >
          <Lottie
            animationData={registerAnimation}
            loop={true}
            className="h-[30vh] lg:h-[70vh] w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Register;
