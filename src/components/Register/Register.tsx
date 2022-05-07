import React from "react";
import { Link } from "react-router-dom";
import "./Responsive.scss";

const Register = () => {
  return (
    <div className="signup w-full bg-white rounded-[3rem] flex justify-between">
      <div className="signup__left w-[calc(50%-2rem)] py-16 px-[4.5rem]">
        <h1 className="signup__title text-6xl font-bold text-[#263238] mb-9">
          Sign up
        </h1>
        <h2 className="signup__desc text-base font-semibold relative pl-32 text-primary mb-10 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-28 before:h-[2px] before:rounded-sm before:bg-primary ">
          Sign up with
        </h2>
        {/* <div className="signup-social flex justify-between flex-wrap">
          <Link
            to="#"
            className="flex justify-around mb-20 w-[calc(50%-1rem) p-6 border-2 border-solid border-gray-300 rounded-2xl text-[#263238] text-2xl font-semibold"
          >
            <i className="fab fa-google signup-social__icon"></i>
            <span className="signup-social__desc">Sign up with Google</span>
          </Link>
          <Link
            to="#"
            className="flex justify-around mb-20 w-[calc(50%-1rem) p-6 border-2 border-solid border-gray-300 rounded-2xl text-[#263238] text-2xl font-semibold"
          >
            <i className="fab fa-facebook signup-social__icon"></i>
            <span className="signup-social__desc">Sign up with Facebook</span>
          </Link>
        </div> */}
        <form autoComplete="off" id="signup__form" className="signup__form">
          <div className="signup__information flex flex-wrap justify-between">
            <div className="signup__name w-full mb-4">
              <label
                htmlFor="name"
                className="signup__label block text-lg color-[#263238] cursor-pointer mb-4"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
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
          <div className="signup__term">
            <input
              type="checkbox"
              id="checkbox"
              className="signup__checkbox hidden peer"
              required
            />
            <label
              htmlFor="checkbox"
              className="signup__label .signup__label--checkbox block text-lg color-[#263238] cursor-pointer relative pl-16 leading-relaxed before:absolute before:top-0 before:left-0 before:w-8 before:h-8 before:border-2 before:border-solid before:border-gray-300 before:rounded-xl before:transition-all before:duration-200 before:ease-linear peer-checked:before:bg-primary peer-checked:before:border-primary"
            >
              I've read and agree with Terms of Service and Privacy Policy
            </label>
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
          Already have an account?&nbsp;
          <Link to="/login" className="text-[#263238]">
            Sign in
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

Register.propTypes = {};

export default Register;
