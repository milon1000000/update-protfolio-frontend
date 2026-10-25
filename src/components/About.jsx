import React from "react";
import { motion } from "framer-motion";
import { aboutInfo } from "../assets/assets";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          About <span className="text-purple-500">Me</span>
        </h2>
        <p className="text-gray-200 text-center max-w-2xl mx-auto mb-16">
          Get to know more about my background, skills, and passion
        </p>

        {/* Image + My Journey */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Profile Image */}
          <div className="lg:w-1/2 overflow-hidden flex items-center justify-center">
            <motion.img
              src="/profile2.jpeg"
              alt="Profile"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
              className="w-full max-w-sm h-auto object-cover rounded-2xl"
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="lg:w-1/2 w-full"
          >
            <div className="rounded-2xl p-8 bg-gray-800">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer specializing in building modern, scalable, and responsive web applications. With hands-on expertise in React, Next.js, TypeScript, and Node.js, I bridge the gap between polished user experiences and robust backend architectures.
              </p>
              <p className="text-gray-300 mb-12 leading-relaxed">
                I focus on writing clean, type-safe code, designing efficient databases with PostgreSQL, MongoDB, and Prisma ORM, and boosting performance with Redis caching. Leveraging modern tools like Tailwind CSS and shadcn/ui, I love turning complex ideas into seamless digital solutions.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1 cursor-pointer shadow-lg flex flex-col items-start gap-4"
                  >
                    <div className="text-3xl flex gap-3 items-center">
                      <data.icon className="text-purple-500 "/>
                       <h3 className="text-xl font-semibold">{data.title}</h3>
                    </div>
                   
                    <p className="text-gray-300 text-sm">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
}

export default About;
