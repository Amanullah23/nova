"use client";
import { useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Residential Complex - Kabul",
    location: "Kabul, Afghanistan",
    image: "/p4.jpeg",
    description: "A modern residential complex with 200+ apartments, featuring sustainable design and smart infrastructure.",
  },
  {
    id: 2,
    title: "Commercial Office Tower",
    location: "Herat, Afghanistan",
    image: "/p1.jpg",
    description: "High-rise office building with advanced facilities, designed for corporate and tech companies.",
  },
  {
    id: 3,
    title: "Industrial Factory",
    location: "Mazar-i-Sharif, Afghanistan",
    image: "/p3.jpg",
    description: "State-of-the-art industrial factory with modern machinery and eco-friendly systems.",
  },
  {
    id: 4,
    title: "Educational Campus",
    location: "Kandahar, Afghanistan",
    image: "/p5.jpg",
    description: "A fully equipped educational campus including classrooms, laboratories, and sports facilities.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="max-w-7xl mx-auto py-2 px-6">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="relative group cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-lime-900 bg-opacity-30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white font-semibold text-lg">
              View Details
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-gray-600 mb-2">{selectedProject.location}</p>
            <p className="text-gray-700">{selectedProject.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
