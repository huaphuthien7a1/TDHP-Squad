import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Responsive.scss";

const Login = () => {
  return (
    <div className="signup w-full bg-white rounded-[3rem] flex justify-between">
      <div className="signup__left w-[calc(50%-2rem)] py-16 px-[4.5rem]">
        <h1 className="signup__title text-6xl font-bold text-[#263238] mb-9">
          Login
        </h1>
        <h2 className="signup__desc text-base font-semibold relative pl-32 text-primary mb-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-28 before:h-[2px] before:rounded-sm before:bg-primary ">
          Enjoy the life
        </h2>
        <form autoComplete="off" id="signup__form" className="signup__form">
          <div className="signup__information flex flex-wrap justify-between">
            <div className="signup__email w-full mb-4">
              <label
                htmlFor="email"
                className="signup__label block text-lg color-[#263238] cursor-pointer mb-4"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder=""
                className="signup__input w-full p-4 text-lg border-2 border-solid border-gray-300 rounded-2xl bg-gray-100 transition-all duration-200 ease-linear focus:border-primary"
                required
              />
            </div>
            <div className="signup__password w-full mb-4">
              <label
                htmlFor="password"
                className="signup__label block text-lg color-[#263238] cursor-pointer mb-4"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder=""
                className="signup__input w-full p-4 text-lg border-2 border-solid border-gray-300 rounded-2xl bg-gray-100 transition-all duration-200 ease-linear focus:border-primary"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            form="signup__form"
            value="Submit"
            className="signup__button w-16 h-16 my-4 flex items-center justify-center bg-primary text-white border-0 rounded-3xl shadow-md cursor-pointer"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>
        <div className="signup__redirect text-lg leading-relaxed">
          Create a new account?&nbsp;
          <Link to="/register" className="text-[#263238]">
            Register
          </Link>
        </div>
      </div>
      <div className="signup__right w-[calc(50%-2rem)] pr-[4.5rem] flex items-center">
        <img
          src="./Startup life-pana.svg"
          alt=""
          className="block w-full object-cover"
        />
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
