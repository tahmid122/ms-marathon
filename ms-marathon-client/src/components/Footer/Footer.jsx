import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-black w-full py-5">
      <footer className="footer lg:footer-horizontal bg-black text-white p-5 lg:p-10">
        <nav>
          <Link
            to={"/"}
            className="text-3xl font-bold items-center text-transparent lg:flex bg-clip-text bg-gradient-to-r from-white to-[#422ad5]"
          >
            MS <span className="text-5xl">🏃</span> Marathon
          </Link>
          <p className="text-sm text-gray-300">
            Run the Race. Join the Community. Track Your Journey <br />
            Your Gateway to Every Great Race <br />
            Miles of Motivation. One Simple Platform
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Navigation</h6>
          <Link to={"/"} className="link link-hover">
            Home
          </Link>
          <Link to={"/marathons"} className="link link-hover">
            Marathons
          </Link>
          <Link to={"/login"} className="link link-hover">
            Login
          </Link>
          <Link to={"/register"} className="link link-hover">
            Register
          </Link>
        </nav>

        <div>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-80">
              <label>Enter your email address</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="Your email"
                  className="input join-item text-black"
                />
                <button className="btn btn-style join-item shadow-xs shadow-slate-500">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
        <nav>
          <h6 className="footer-title">Social Media</h6>
          <div className="flex items-center gap-6">
            <a href="https://www.facebook.com/TahmidAlamJG" target="_blank">
              <FaFacebook size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/tahmidalam122/"
              target="_blank"
            >
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/tahmid122" target="_blank">
              <FaGithub size={24} />
            </a>
          </div>
        </nav>
      </footer>
      <p className="text-white text-center w-full text-sm">
        MS <span className="text-xl">🏃</span> Marathon, All rights reserved
        &copy; 2025
      </p>
    </div>
  );
};

export default Footer;
