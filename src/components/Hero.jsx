import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 bg-gradient-to-b from-white via-blue-50/30 to-white text-gray-900"
    >
      {/* left side */}
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between mt-12 md:mt-0">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-gray-900">
            Hi, I am <span className="text-blue-600">Mahinur Milon</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-6 typewriter text-gray-800">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
            I create stunning web experiences with modern technologies and
            innovative, human-centered design.
          </p>
          <div className="flex space-x-4 mt-8">
            <a
              href="#projects"
              className="px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-blue-600/35 transition-all duration-300 hover:scale-[1.02]"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3.5 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Contact
            </a>
          </div>
        </div>
        {/* right side */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex items-center justify-center ring-8 ring-blue-100/70 shadow-2xl">
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
