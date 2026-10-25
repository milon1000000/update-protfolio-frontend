import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ title, description, image, tech, icons, demo, code, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeInOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="group relative bg-[#18181f] border border-gray-800/80 hover:border-purple-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2 flex flex-col justify-between"
    >
      {/* Top Browser Bar Mockup + Image */}
      <div className="relative overflow-hidden bg-gray-950">
        {/* macOS style browser window dots */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#121217] border-b border-gray-800/70">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          <span className="ml-2 text-[11px] text-gray-500 font-mono truncate">{title.toLowerCase().replace(/\s+/g, '-')}.app</span>
        </div>

        {/* Project Thumbnail */}
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
          {/* Subtle bottom gradient over image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#18181f] via-transparent to-transparent opacity-80 pointer-events-none"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
        <div>
          {/* Title & Quick Link */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
              {title}
            </h3>
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors p-1"
              title="Open Live Preview"
            >
              <FiExternalLink className="text-lg" />
            </a>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            {description}
          </p>

          {/* Tech Badges */}
          <div className="mb-6">
            <h4 className="text-xs uppercase tracking-wider text-gray-400 font-semibold mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {tech.map((item, idx) => {
                const Icon = item.icon || (icons && icons[idx]);
                return (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#101014] hover:bg-[#202028] text-gray-300 hover:text-purple-300 rounded-lg text-xs font-medium border border-gray-800 hover:border-purple-500/40 transition duration-200"
                  >
                    {Icon && <Icon className="text-purple-400 text-sm shrink-0" />}
                    <span>{item.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-800/80">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <FiExternalLink className="text-base" />
            <span>Live Demo</span>
          </a>

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#121217] hover:bg-[#22222a] text-gray-200 hover:text-white font-semibold text-sm rounded-xl border border-gray-700/80 hover:border-purple-500/40 transition-all duration-300 hover:scale-[1.02]"
          >
            <FaGithub className="text-base text-gray-400 group-hover:text-white" />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
