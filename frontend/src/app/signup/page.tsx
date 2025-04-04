'use client'

import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const SignupPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "", phone: "" })

  const handleSetFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }


  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault()
    const req = await fetch("/frontend/src/app/api/auth/signup.ts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })

    const res = await req.json()
    console.log(res)

  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-2xl border border-gray-300 py-6 px-10 rounded-2xl relative">
        <h2 className="text-black text-center text-2xl font-semibold">Sign Up</h2>
        <form onSubmit={handleSignUp} className="space-y-6 mt-6" >
          <div>
            <input
              type="text"
              name="name"
              onChange={handleSetFormData}
              placeholder="Full Name"
              className="w-full py-1 px-3 rounded-lg bg-gray-200 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-inner"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              onChange={handleSetFormData}
              placeholder="Email Address"
              className="w-full py-1 px-3 rounded-lg bg-gray-200 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-inner"
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              onChange={handleSetFormData}
              placeholder="Phone Number"
              className="w-full py-1 px-3 rounded-lg bg-gray-200 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-inner"
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              onChange={handleSetFormData}
              placeholder="Password"
              className="w-full py-1 px-3 rounded-lg bg-gray-200 border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 shadow-inner"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-2/3 py-2 mt-8 rounded-lg bg-blue-900 hover:bg-black text-white font-medium shadow-md transition-all"
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
            className="w-2/3 text-[14px] flex items-center justify-center py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-900 font-medium shadow-inner transition-all"
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
