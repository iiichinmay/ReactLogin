import React from "react";
import { IoPerson } from "react-icons/io5";
import { FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center  bg-cover bg-center"
      style={{ backgroundImage: "url('/Sun.png')" }}
    >
      <div
        className="box backdrop-blur-md p-8  rounded-3xl "
        style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)" }}
      >
        <form action="" >
          <h3 className="title text-3xl font-bold mb-4 text-center">Login</h3>

          <div className="input flex flex-col gap-5">
            <div className="relative flex items-center">
              <input
                className="p-3 pl-5 pr-10 rounded-3xl w-full"
                type="text"
                placeholder="Username"
                required
              />
              <IoPerson className="absolute right-5 text-black-500" />
            </div>

            <div className="relative flex items-center">
              <input
                className="p-3 pl-5 pr-10 rounded-3xl w-full"
                type="password"
                placeholder="Password"
                required
              />
              <FaLock className="absolute right-5 text-black-500" />
            </div>
          </div>

          <div className="remember-forget p-5 space-x-4 font-semibold text-center ">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forget Password?</a>
          </div>

          <div className="flex justify-center">
            <button
              className="border border-black bg-white rounded-2xl px-6 py-1"
              type="submit"
            >
              Login
            </button>
          </div>

          <div className="registerlink">
            <p className="mt-5 text-center font-semibold flex justify-evenly  ">
              Don't Have Account? <a href="#">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
