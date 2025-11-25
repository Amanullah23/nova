import React from "react";
import { ShieldCheck, Users2, Truck } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const BusinessOverview = () => {
  const data = [
    {
      id: 1,
      title: "Core Values",
      icon: <ShieldCheck className="w-8 h-8 text-lime-500" />,
      description:
        "At Nova Inc. Construction, we value integrity, quality, and innovation, building trust through every project we deliver. We prioritize safety, teamwork, and sustainability, ensuring strong results today and a better future tomorrow.",
      image: "/2.png", // your image path here
    },
    {
      id: 2,
      title: "Partners",
      icon: <Users2 className="w-8 h-8 text-lime-500" />,
      description:
        "We collaborate with trusted partners, suppliers, subcontractors, and industry experts who share our values of quality, safety, and innovation, ensuring excellence and long-term value.",
      image: "/2.png", // your image path here src="/logo-white.png"
    },
    {
      id: 3,
      title: "Distribution Channel",
      icon: <Truck className="w-8 h-8 text-lime-500" />,
      description:
        "Projects are delivered through direct supplier partnerships and efficient supply chain management, ensuring timely material flow and consistent quality for our clients.",
      image: "/1.jpeg", // your image path here
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold"
          >
            Business Overview
            <span className="block w-16 h-1 bg-green-600 mx-auto mt-3 rounded"></span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-gray-600 text-lg max-w-3xl mx-auto text-center dark:text-gray-300 mb-12 font-sans"
          >
            A brief overview of the entire plan, highlighting key objectives and
            strategies. Company Description: Details the nature of the business,
            its mission, and what services will be offered.
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid md:grid-cols-3 gap-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-500"
            >
              {/* Image */}
              <div className="overflow-hidden p-8">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={310}
                  height={80}
                  className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-lg"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-left">
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="font-sans text-xl font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessOverview;
