/* eslint-disable no-unused-vars */
import { BoxReveal } from "@/components/magicui/box-reveal";
import React from "react";
import { motion } from "motion/react";

const Contact = () => {
  return (
    <>
      <div className="w-full p-4 lg:w-11/12 mx-auto mb-10 min-h-screen">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mt-10 flex  items-center justify-center"
        >
          <form className=" p-4 lg:p-10 shadow-sm shadow-slate-400 w- border-t-4 w-full lg:w-6/12 border-t-[#422ad5] dark:border-t-white">
            <BoxReveal>
              <h3 className="uppercase text-3xl text-center lg:text-left font-bold italic dark:text-white">
                Contact Form
              </h3>
            </BoxReveal>

            <p className="mt-5 text-sm">
              If you haven't found what you're looking for in the FAQ section of
              an event or have any other questions, feel free to send us your
              request, and we will get back to you as soon as possible:
            </p>

            <div className="mt-5 space-y-3">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    name="email"
                    type="email"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Subject
                </label>
                <div className="mt-2">
                  <input
                    name="subject"
                    type="text"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    name="message"
                    type="text"
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-primary sm:text-sm/6 dark:bg-slate-900 dark:text-white h-[200px] resize-none"
                  />
                </div>

                <div className="mt-5">
                  <button type="submit" className="btn btn-style w-full">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
