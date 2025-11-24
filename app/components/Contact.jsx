"use client";
import React from "react";
import Map from "./Map";


export default function ContactSection() {
  return (
    <div className="w-full py-16 px-6 md:px-12 lg:px-20 mb-7">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE IMAGE */}
        <div className="w-full">
          <div>
            <h1 className="text-5xl font-bold">Contacts</h1>
            <p className="text-lime-500 text-xl font-bold mt-5">Head Office</p>
            <p className="text-gray-600">Dasht-e Barchi, Kabul - Afghanistan</p>
          </div>
          <div>
            <p className="text-lime-500 text-xl font-bold mt-5">Phone</p>
            <p className="text-gray-600">+9374 944 2276</p>
          </div>
          <div>
            <p className="text-lime-500 text-xl font-bold mt-5">Email</p>
            <p className="text-gray-600">nova.inc.cc@gmail.com</p>
          </div>
          <div className="">
            <Map/>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full">
          <form className="space-y-7">
            {/* Name */}
            <div>
              <input
                type="text"
                placeholder="Enter your full name*"
                className="w-full p-3  dark:border-gray-600 rounded-lg bg-gray-200 dark:bg-gray-800 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Enter your e-mail*"
                className="w-full p-3  dark:border-gray-600 rounded-lg bg-gray-200 dark:bg-gray-800 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              
              <input
                type="text"
                placeholder="+937XXXXXXXXX*"
                className="w-full p-3  dark:border-gray-600 rounded-lg bg-gray-200 dark:bg-gray-800 focus:ring-2 focus:ring-green-500 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              
              <textarea
                rows="4"
                placeholder="Enter your message*"
                className="w-full p-3  dark:border-gray-600 rounded-lg bg-gray-200 dark:bg-gray-800 focus:ring-2 focus:ring-green-500 outline-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
