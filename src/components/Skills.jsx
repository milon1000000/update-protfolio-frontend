import React from 'react'
import { motion } from "framer-motion"
import { skills } from "../assets/assets"

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className='py-20 bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-4 text-center'>
          My <span className='text-purple-500'>Skills</span>
        </h2>
        <p className='text-gray-200 mb-16 text-center'>
          Technologies I work with to bring ideas to life
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => {
            // Deduplicate tags by name to guarantee no duplicates ever render
            const uniqueTags = Array.from(
              new Map(skill.tags.map((t) => [t.name, t])).values()
            );

            return (
              <div
                key={skill.title || index}
                className="bg-gray-700 rounded-2xl p-6 hover:translate-y-2 transition duration-300 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-7 h-7 mr-6 text-purple-500" />
                  <h3 className="text-xl font-semibold whitespace-nowrap">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {uniqueTags.map((tech) => (
                    <a
                      href={tech.link}
                      target='_blank'
                      rel='noreferrer'
                      key={tech.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-linear-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] text-sm hover:text-purple-400 transition"
                    >
                      {tech.icon && <tech.icon className="text-base text-purple-400 shrink-0" />}
                      <span>{tech.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
