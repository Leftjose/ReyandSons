// src/components/About.js
import React from "react";
import background from "./homelight.jpg"; 

export default function About() {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
      id="about"
    >
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-3xl mb-4 font-medium text-white">
            Rey & Sons Electric
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed text-white">
            Greetings, I am currently looking for an Internship or Entry Level
            Front-End Web Developer role. I completed a Full Stack Web Developer
            Bootcamp at UTSA in January 2022. You are welcome to contact me if
            you have any further questions. <br></br>
            Thank You
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              Contact Us
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              Past Work Gallery
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt=""
            src="/icons8.png"
          />
        </div>
      </div>
    </section>
  );
}
