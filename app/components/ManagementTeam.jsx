"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ManagementTeam =()=> {
  const team = [
    {
      name: "Eng. Ahmad Rahimi",
      role: "Chief Executive Officer",
      image: "/team2.png",
      bio: "Innovative leader with over a decade of experience in driving organizational growth and strategic development. Committed to building high-performing teams and delivering impactful business results.",
    },
    {
      name: "Fatima Sultani",
      role: "Operations Manager",
      image: "/team4.png",
      bio: "Skilled operations specialist focused on improving efficiency, workflow, and customer satisfaction. Passionate about optimizing processes and ensuring smooth daily operations.",
    },
    {
      name: "Mohammad Jawad",
      role: "Finance Director",
      image: "/team2.png",
      bio: "Experienced financial strategist with strong expertise in budgeting, auditing, and financial planning.Dedicated to ensuring financial stability and guiding sustainable business decisions.",
    },
    {
      name: "Sara Noori",
      role: "Project Manager",
      image: "/team4.png",
      bio: "Results-driven project manager known for delivering projects on time with high quality and coordination.Expert in team collaboration, planning, and ensuring project success from start to finish.",
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
        <span className="block w-16 h-1 bg-lime-500 mx-auto mt-3 rounded mb-4"></span>
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
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {member.name}
              </h3>
              <p className="text-lime-500 dark:text-blue-400 text-sm">
                {member.role}
              </p>
              <p className="text-sm text-gray-500 text-start mx-auto mt-2">
              <span className="text-bold text-xl">Bio: </span>{member.bio}
              </p>
            </motion.div>
            
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;