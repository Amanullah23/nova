import Image from "next/image";
import React from "react";
import headerImg from "@/public/header2.jpg"; // <-- replace with your own image path
import { motion } from "framer-motion";

const Header = () => {
  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-12 px-6 md:px-12 mt-15">
      <div className="container mx-auto grid md:grid-cols-2 items-center gap-8">
        {/* Left Column */}
        <div data-aos="fade-right">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-mono font-bold text-gray-900 dark:text-white mb-4"
          >
            <span className="text-lime-500 font-sans">NOVA INC</span> - Where
            Innovation Meets Trust.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 font-sans dark:text-gray-300 text-base md:text-lg leading-relaxed"
          >
            To be a leading construction and engineering company recognized for
            delivering innovative, sustainable, and high-quality infrastructure
            solutions that shape modern cities and resilient communities.
          </motion.p>
        </div>

        {/* Right Column (Image) */}
        <div
          className="flex justify-center md:justify-end mt-5"
          data-aos="fade-left"
          data-aos-delay="150"
        >
          <Image
            src={headerImg}
            alt="Header Image"
            className="w-auto h-64 md:h-100 rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
