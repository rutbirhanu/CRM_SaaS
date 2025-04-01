import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignupPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-2xl border border-gray-300 py-6 px-10 rounded-2xl relative">
        <h2 className="text-black text-center text-2xl font-semibold">Sign Up</h2>
        <form className="space-y-6 mt-6">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full py-2 px-3 rounded-lg bg-gray-200 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-inner"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full py-2 px-3 rounded-lg bg-gray-200 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-inner"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 px-3 rounded-lg bg-gray-200 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-inner"
            />
                  </div>
                  <div className="flex justify-center">
          <button
            type="submit"
            className="w-1/2 py-2 mt-8 rounded-lg bg-blue-900 hover:bg-black text-white font-medium shadow-md transition-all"
          >
            Sign Up
                      </button>
                      </div>
        </form>
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-gray-600 text-sm">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="flex justify-center">
        <button
          className="w-1/2 text-[14px] flex items-center justify-center py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium shadow-inner transition-all"
        >
          <FcGoogle className="mr-2 text-xl" /> Sign Up with Google
              </button>
              </div>
        <p className="text-gray-600 text-[13px] text-center mt-4">
          Already have an account? <a href="#" className="text-gray-900 hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
