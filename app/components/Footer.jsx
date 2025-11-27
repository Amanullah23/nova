import React from "react";
//import { FaLinkedin } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  MapPin,
  Phone, Linkedin,
} from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and About */}
        <div>
          <Image
            src="/logo.png"
            alt="Company Logo"
            className="w-32 mb-4"
            width={150}
            height={60}
            priority
          />
          <p className="text-sm leading-relaxed">
            We provide innovative and reliable digital solutions to help your
            business connect, grow, and succeed in the.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-lime-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-500 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-500 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-500 transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-500 transition-colors">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="space-y-4 text-base">
            {" "}
            {/* increased spacing and font size */}
            <li className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-lime-500 drop-shadow-md" />{" "}
              {/* bigger + shadow */}
              Dasht-e-Barchi, Kabul, Afghanistan
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-6 h-6 text-lime-600 drop-shadow-md" />
              +93 74 944 2276
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-lime-600 drop-shadow-md" />
              nova.inc.cc@gmail.com
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex gap-4">
            {/* Facebook */}
            <a
              href="www.facebook.com/nova.inc.construction"
              className="p-3 bg-white/10 rounded-full transition-all duration-300 hover:bg-blue-600 hover:scale-110"
            >
              <FaFacebook className="w-6 h-6 text-white" />
            </a>

            {/* XTwitter */}
            <a
              href="www.twitter.com/NovaIncCC"
              className="p-3 bg-white/10 rounded-full transition-all duration-300 hover:bg-gray-600 hover:scale-110"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/nova.inc.construction?igsh=djBqa3N3czRoNHlt" target="blank"
              className="p-3 bg-white/10 rounded-full transition-all duration-300 hover:bg-pink-500 hover:scale-110"
            >
              <FaInstagram className="w-6 h-6 text-white" />
            </a>
             <a
              href="https://www.linkedin.com/company/nova-inc-construction/" target="blank"
              className="p-3 bg-white/10 rounded-full transition-all duration-300 hover:bg-blue-500 hover:scale-110"
            >
              <FaLinkedin className="w-6 h-6 text-white" />
            </a>
           
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} NOVA INC. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
