"use client";

import React from "react";
import image from "@/public/contact.png";

export default function ContactSection() {
  return (
    <div className="w-full py-16 px-6 md:px-12 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="w-full">
          <img
            src={image}
            alt="Contact"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="w-full">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          <form className="space-y-5">

            {/* Name */}
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Phone
              </label>
              <input
                type="text"
                placeholder="+1 (234) 56789"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your message"
                className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 outline-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
