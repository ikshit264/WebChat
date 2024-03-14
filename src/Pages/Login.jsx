import React from "react";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="w-full max-w-md">
        <div className="flex flex-col gap-3 items-center bg-white p-5 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold">Ikshit Chat</h1>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className=" font-semibold text-xl text-zinc-600 m-2">Register</h2>
          <div className="flex flex-col justify-between items-center gap-2 ">
            <input
              type="text"
              placeholder="Username"
              className=" border-b-2 px-3 py-2"
            />
            <input
              type="text"
              placeholder="Email"
              className="px-3 border-b-2 py-2"
            />
            <input
              type="password"
              placeholder="Password"
              className="px-3 border-b-2 py-2"
            />
            <button
              type="button"
              onClick={() => {
                alert("Registration Successful");
              }}
              className="bg-blue-500 m-2 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg text-sm px-5 py-2.5"
            >
              Log In
            </button>
          </div>
          <div className="already text-sm text-zinc-500">You already have an account? <Link to="/signin" className=" italic text-blue-600">Login</Link></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
