/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { getFormData } from "../../utils/getFormData";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import Lottie from "lottie-react";
import loginAnimation from "../../assets/login2.json";
const Login = () => {
  const { signInUserWithGoogle, signInUser, setLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.state;
  const handleLogin = (e) => {
    e.preventDefault();
    const data = getFormData(e.target);
    signInUser(data.email, data.password)
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
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="py-5">
        <div className="my-5 w-full lg:w-11/12 mx-auto min-h-[75vh] flex items-center justify-center gap-10 flex-col-reverse lg:flex-row overflow-hidden p-3">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="flex min-h-full flex-col justify-center px-6  lg:px-8 w-[450px] mx-auto py-10 rounded shadow-sm shadow-slate-400 dark:shadow-xs dark:shadow-slate-500 card-style"
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
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-primary dark:text-gray-300"
                      >
                        Forgot password?
                      </a>
                    </div>
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
                  <button type="submit" className="btn btn-style w-full">
                    Login
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
                  className="btn bg-white text-black border-[#e5e5e5] w-full dark:bg-slate-900 dark:text-white dark:border-none dark:shadow-xs dark:shadow-slate-500 btn-style"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
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
