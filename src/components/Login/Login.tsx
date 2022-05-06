import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-[95%] bg-white rounded-[3rem] flex justify-between">
      <div className="w-[calc(50%-2rem)] py-16 px-[4.5rem]">
        <h1 className="text-7xl font-bold text-[#263238] mb-14">Sign up</h1>
        <h2 className="text-lg font-semibold relative pl-32 text-[#f6725d] mb-12 before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:w-28 before:h-[2px] before:rounded-sm before:bg-[#f6725d] ">
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
          <div className="flex flex-wrap justify-between">
            <div className="w-full mb-8">
              <label
                htmlFor="name"
                className="block text-xl color-[#263238] cursor-pointer mb-4"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-5 text-xl border-2 border-solid border-gray-300 rounded-2xl bg-gray-100 transition-all duration-200 ease-linear focus:border-[#f6725d]"
                required
              />
            </div>
            <div className="w-full mb-8">
              <label
                htmlFor="password"
                className="block text-xl color-[#263238] cursor-pointer mb-4"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-5 text-xl border-2 border-solid border-gray-300 rounded-2xl bg-gray-100 transition-all duration-200 ease-linear focus:border-[#f6725d]"
                required
              />
            </div>
          </div>
          <div className="signup__term">
            <input type="checkbox" id="checkbox" className="hidden" required />
            <label
              htmlFor="checkbox"
              className="block text-xl color-[#263238] cursor-pointer relative pl-16 leading-relaxed before:absolute before:top-0 before:left-0 before:w-10 before:h-10 before:border-2 before:border-solid before:border-gray-300 before:rounded-2xl before:transition-all before:duration-200 before:ease-linear"
            >
              I've read and agree with Terms of Service and Privacy Policy
            </label>
          </div>
          <button
            type="submit"
            form="signup__form"
            value="Submit"
            className="w-20 h-20 my-8 flex items-center justify-center bg-[#f6725d] text-white border-0 rounded-[2rem] shadow-md cursor-pointer"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>
        <div className="text-xl leading-relaxed">
          Already have an account?&nbsp;
          <Link to="#" className="text-[#263238]">
            Sign in
          </Link>
        </div>
      </div>
      <div className="w-[calc(50%-2rem)] flex items-center">
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
