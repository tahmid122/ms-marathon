import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="w-11/12 mx-auto my-10 min-h-screen">
        <h3 className="uppercase text-3xl font-bold italic dark:text-white">
          Contact
        </h3>
        <div className="mt-10 flex  items-center justify-center">
          <form className="p-10 shadow-sm shadow-slate-400 w- border-t-4 w-full lg:w-6/12 border-t-[#422ad5]">
            <h3 className="uppercase text-3xl font-bold italic dark:text-white">
              Contact Form
            </h3>
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
        </div>
      </div>
    </>
  );
};

export default Contact;
