"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ManagementTeam =()=> {
  const team = [
    {
      name: "Eng. Ahmad Rahimi",
      role: "Chief Executive Officer",
      image: "/team1.jpg",
    },
    {
      name: "Fatima Sultani",
      role: "Operations Manager",
      image: "/team2.jpg",
    },
    {
      name: "Mohammad Jawad",
      role: "Finance Director",
      image: "/team3.jpg",
    },
    {
      name: "Sara Noor",
      role: "Project Manager",
      image: "/team4.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900" id="team">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-sans font-extrabold text-black dark:text-white mb-4"
        >
          Our Management Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-black font-sans text-lg dark:text-gray-300 max-w-xl mx-auto mb-12"
        >
          Meet the experienced professionals leading our company toward growth
          and excellence in every construction project we deliver.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 p-6"
            >
              <div className="relative w-40 h-32 mx-auto mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                {member.name}
              </h3>
              <p className="text-green-600 dark:text-blue-400 text-sm">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;