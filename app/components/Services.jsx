import React from "react";
import {
  FolderOpenDot,
  HatGlasses,
  BrickWall,
  TrafficCone,
} from "lucide-react"; // Lucide icons
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <HatGlasses className="w-12 h-12 text-lime-500 mb-4" />,
      title: "Structural Steel Fabrication & Erection",
      description: "Delivering durable and high-quality steel structures.",
    },
    {
      icon: <TrafficCone className="w-12 h-12 text-lime-500 mb-4" />,
      title: "Civil & Infrastructure Projects",
      description: "Roads, bridges, and essential community infrastructure.",
    },
    {
      icon: <BrickWall className="w-12 h-12 text-lime-500 mb-4" />,
      title: "Residential & Commercial Construction",
      description: "Modern, funcutional, and sustainable spaces.",
    },
    {
      icon: <FolderOpenDot className="w-12 h-12 text-lime-500 mb-4" />,
      title: "Project Management & Consultancy",
      description:
        "Ensuringprojects are completed on time, safely, and within budget.",
    },
  ];

  return (
    <section
      className="w-full py-25 px-6 md:px-12 bg-gray-50 dark:bg-gray-900"
      id="services"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold"
        >
          What We Do
        </motion.h2>
        <span className="block w-16 h-1 bg-lime-500 mx-auto mt-3 rounded mb-4"></span>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 text-lg max-w-3xl mx-auto text-center dark:text-gray-300 mb-12 font-sans"
        >
          At NOVA Inc. Construction, our organizational structure is designed to
          ensure efficiency, accountability, and high-quality project delivery.
          At the top, CEO/Managing Director provides strategic leadership,
          supported by a management team overseeing key functions.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-sans font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-sans dark:text-gray-300 text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
