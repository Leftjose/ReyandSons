// src/components/Navbar.js

import { ChatAlt2Icon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-gray-700 md:sticky top-0 z-10 ">
      <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="inline-flex items-center ml-3 text-xl">
            <img src="/rrricon.png" alt="iconpng" className="w-25 h-20 " /> Rey
            & Sons LLC.
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="text-white-700 mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Services
          </a>
          {/* <a href="#testimonials" className="mr-5 hover:text-white">
             Testimonials
           </a> */}
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-white-00 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0"
        >
          Contact Us
          <ChatAlt2Icon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
