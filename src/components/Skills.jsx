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
      className='py-20 bg-white text-gray-900'
    >
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900'>
          My <span className='text-blue-600'>Skills</span>
        </h2>
        <p className='text-gray-600 mb-16 text-center max-w-2xl mx-auto'>
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
                className="bg-slate-50 border border-gray-200/90 rounded-2xl p-6 hover:-translate-y-1.5 transition-all duration-300 hover:shadow-xl hover:border-blue-300 cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <skill.icon className="w-7 h-7 mr-3 text-blue-600 shrink-0" />
                  <h3 className="text-xl font-semibold whitespace-nowrap text-gray-900">
                    {skill.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {uniqueTags.map((tech) => (
                    <a
                      href={tech.link}
                      target='_blank'
                      rel='noreferrer'
                      key={tech.name}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-gray-200/90 text-sm text-gray-800 font-medium hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50/50 shadow-2xs transition"
                    >
                      {tech.icon && <tech.icon className="text-base text-blue-600 shrink-0" />}
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
