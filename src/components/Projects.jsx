import React from 'react'
import { projects } from "../assets/assets.jsx"
import { motion } from "framer-motion"
import ProjectCard from './ProjectCard.jsx'

function Projects() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.15 }}
      id="projects"
      className='py-24 bg-linear-to-r from-[#1a1a1a] via-[#242429] to-[#1a1a1a] text-white'
    >
      <div className='container mx-auto px-6 max-w-6xl'>
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-purple-400 bg-purple-500/10 border border-purple-500/30 rounded-full mb-3">
            Featured Portfolio
          </span>
          <h2 className='text-3xl md:text-5xl font-bold tracking-tight mb-4'>
            Featured <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400'>Projects</span>
          </h2>
          <p className='text-gray-300 max-w-2xl mx-auto text-base leading-relaxed'>
            A showcase of full-stack web applications featuring modern UI/UX, real-time functionality, and scalable backend architectures.
          </p>
        </div>

        {/* 2-Column Balanced Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10'>
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects;
