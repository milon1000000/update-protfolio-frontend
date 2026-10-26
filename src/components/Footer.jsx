import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 border-t border-gray-200 py-12">
      <div className="container mx-auto px-6 flex flex-col items-center space-y-6">
        
        {/* Social Icons */}
        <div className="flex space-x-6 text-2xl">
          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://github.com/milon1000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            <FaGithub />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://www.linkedin.com/in/md-mahinur-rahman-milon-a70748317"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            <FaLinkedin />
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.15 }}
            href="https://www.facebook.com/share/1KombUH9QW"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition duration-300"
          >
            <FaFacebook />
          </motion.a>
        </div>

        {/* Divider */}
        <div className="w-20 h-1 bg-blue-600 rounded-full"></div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 font-medium">
          © {new Date().getFullYear()} Mahinur Milon. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
