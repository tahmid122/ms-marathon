import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="w-11/12 mx-auto my-10 min-h-screen">
        <h3 className="uppercase text-3xl font-bold italic dark:text-white">
          About
        </h3>
        <div className="mt-5">
          <section className="pt-0 pb-16 px-4 md:px-10 lg:px-20">
            <div className="max-w-6xl mx-auto">
              <p className="text-lg text-slate-600 dark:text-white mb-10 text-center max-w-3xl mx-auto">
                <span className="font-semibold">MS Marathon</span> isn’t just a
                race — it’s a movement. We’re here to empower runners of all
                levels by creating an inclusive, tech-enabled space for marathon
                enthusiasts across the globe.
              </p>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
                    Our Story
                  </h3>
                  <p className="text-slate-600 dark:text-white mb-4">
                    Founded by passionate runners and tech lovers, MS Marathon
                    started as a dream to make marathon events more accessible,
                    fun, and meaningful. Today, it has become a platform where
                    technology meets fitness, and runners find purpose beyond
                    the finish line.
                  </p>
                  <p className="text-slate-600 dark:text-white">
                    From virtual races to in-person events, MS Marathon supports
                    your journey with tools, community, and inspiration. Whether
                    it’s your first 5K or your 10th marathon, we’ve got your
                    back.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
                    What We Offer
                  </h3>
                  <ul className="space-y-3 text-slate-600 dark:text-white">
                    <li>✅ Easy registration and event tracking</li>
                    <li>✅ Virtual & in-person races</li>
                    <li>✅ Progress tracking, medals, and digital rewards</li>
                    <li>✅ Community support and motivation</li>
                    <li>✅ Tools for event organizers</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
                  Our Mission & Values
                </h3>
                <p className="text-slate-600 dark:text-white mb-6">
                  Our mission is to inspire healthier lifestyles, promote
                  endurance sports, and bring people together through meaningful
                  events. We believe in:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-2 text-slate-600 dark:text-white">
                    <li>✔️ Community First</li>
                    <li>✔️ Progress Over Perfection</li>
                  </ul>
                  <ul className="space-y-2 text-slate-600 dark:text-white">
                    <li>✔️ Wellness in Every Form</li>
                    <li>✔️ Innovation & Inclusion</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <h4 className="text-xl font-semibold text-black dark:text-white mb-2">
                  Join the Movement
                </h4>
                <p className="text-slate-600 dark:text-white mb-6 max-w-xl mx-auto">
                  MS Marathon is more than a race platform — it’s a community
                  built for you. Sign up today and take the first step toward
                  your next finish line.
                </p>
                <Link to={"/register"} className="btn btn-style">
                  Register Now
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
