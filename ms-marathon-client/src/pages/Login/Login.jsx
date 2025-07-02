/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { getFormData } from "../../utils/getFormData";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login2.json";
import googleLogo from "../../assets/google.png";
const Login = () => {
  const { signInUserWithGoogle, signInUser, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.state;
  const [isLoadingLogin, setIsLoadingLogin] = useState(false);
  const handleLogin = (e) => {
    setIsLoadingLogin(true);
    e.preventDefault();
    const data = getFormData(e.target);
    signInUser(data.email, data.password)
      .then((result) => {
        if (result.user) {
          toast.success("Successfully Login");
          setIsLoadingLogin(false);
          navigate(path || "/");
        }
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoadingLogin(false);
        setLoading(false);
      });
  };
  const handleGoogleSignIn = () => {
    signInUserWithGoogle()
      .then((result) => {
        if (result.user) {
          toast.success("Successfully Login");
          navigate(path || "/");
        }
      })
      .catch((error) => {
        toast.error(error.message);
        setLoading(false);
      });
  };

  return (
    <>
      <div className="py-5">
        <div className="my-5 w-full lg:w-11/12 mx-auto min-h-[75vh] flex items-center justify-center gap-10 flex-col-reverse lg:flex-row overflow-hidden p-3">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex w-full min-h-full flex-col justify-center px-6  lg:px-8 lg:w-[450px] mx-auto py-5 rounded shadow-sm shadow-slate-400 dark:shadow-xs dark:shadow-slate-500 card-style"
          >
            <div className="">
              <h2 className="text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                Login
              </h2>
            </div>

            <div className="mt-10">
              <form onSubmit={handleLogin} className="space-y-6">
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
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6  dark:bg-slate-900 dark:text-white"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="btn btn-style w-full text-center"
                  >
                    {isLoadingLogin ? (
                      <span className="loading loading-spinner loading-md text-white"></span>
                    ) : (
                      "Login"
                    )}
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm/6 text-gray-500">
                Don't have an account?
                <Link
                  to={"/register"}
                  className="font-semibold text-primary dark:text-white"
                >
                  Register
                </Link>
              </p>
              <div className="divider ">OR</div>
              <div>
                <button
                  onClick={handleGoogleSignIn}
                  className="btn bg-white text-black border-[#e5e5e5] w-full dark:bg-slate-900 dark:text-white dark:border-none dark:shadow-xs dark:shadow-slate-500 btn-style flex items-center justify-center gap-2"
                >
                  <img className="w-5 h-5" src={googleLogo} alt="" />
                  Login with Google
                </button>
              </div>
            </div>
          </motion.div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex-1 w-full"
          >
            <Lottie
              animationData={loginAnimation}
              loop={true}
              className="h-[30vh] lg:h-[70vh] w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
