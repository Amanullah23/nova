import React from 'react'
import { motion } from "framer-motion";
import Projects from './Projects';

const Project = () => {
  return (
    <div>
      <section
            className="w-full py-25 px-6 md:px-12 bg-gray-50 dark:bg-gray-900"
            id="projects"
          >
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-bold"
              >
                Our Project!
              </motion.h2>
              <span className="block w-16 h-1 bg-lime-500 mx-auto mt-3 rounded mb-4"></span>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-gray-600 text-lg max-w-3xl mx-auto text-center dark:text-gray-300 mb-12 font-sans"
              >
                NOVA INC Construction Company has established itself as a leading force in Afghanistan’s construction and infrastructure sector, delivering landmark projects with exceptional quality and engineering excellence. Over the years, the company has successfully completed major residential, commercial, and industrial developments that demonstrate its commitment to innovation, durability, and modern design.
              </motion.p>
      
              
            </div>
            <Projects />
          </section>
    </div>
  )
}

export default Project
