import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="fixed z-50 w-full bg-white/90 backdrop-blur-md text-gray-900 border-b border-gray-100 py-4 px-8 shadow-xs transition-all">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-1">
          <a href="#" className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
            Mahinur
          </a>
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-blue-600">Milon</span>
          <div className="w-2.5 h-2.5 bg-blue-600 rounded-full ml-0.5 mt-2"></div>
        </div>

        <div className="hidden md:flex space-x-10 font-medium text-sm">
          <a
            href="#home"
            className="group relative text-gray-700 hover:text-blue-600 duration-300 py-1"
          >
            <span>Home</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#about"
            className="group relative text-gray-700 hover:text-blue-600 duration-300 py-1"
          >
            <span>About</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#skills"
            className="group relative text-gray-700 hover:text-blue-600 duration-300 py-1"
          >
            <span>Skills</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#projects"
            className="group relative text-gray-700 hover:text-blue-600 duration-300 py-1"
          >
            <span>Projects</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="group relative text-gray-700 hover:text-blue-600 duration-300 py-1"
          >
            <span>Contact</span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <div className="md:hidden flex items-center justify-center text-2xl text-gray-800 cursor-pointer">
          {showMenu ? (
            <RxCross2 onClick={() => setShowMenu(!showMenu)} />
          ) : (
            <TiThMenu onClick={() => setShowMenu(!showMenu)} />
          )}
        </div>
      </div>

      {showMenu && (
        <div className="md:hidden mt-4 bg-white border-t border-gray-100 py-8 flex flex-col space-y-6 items-center justify-center shadow-xl rounded-b-2xl">
          <a
            href="#home"
            className="text-lg font-medium text-gray-800 hover:text-blue-600 duration-300"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span>Home</span>
          </a>
          <a
            href="#about"
            className="text-lg font-medium text-gray-800 hover:text-blue-600 duration-300"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span>About</span>
          </a>
          <a
            href="#skills"
            className="text-lg font-medium text-gray-800 hover:text-blue-600 duration-300"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span>Skills</span>
          </a>
          <a
            href="#projects"
            className="text-lg font-medium text-gray-800 hover:text-blue-600 duration-300"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span>Projects</span>
          </a>
          <a
            href="#contact"
            className="text-lg font-medium text-gray-800 hover:text-blue-600 duration-300"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span>Contact</span>
          </a>
        </div>
      )}
    </nav>
  );
}

export default Nav;
