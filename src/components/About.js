// src/components/About.js
import React from "react";
import background from "./nasa.jpg"; 

export default function About() {
  return (
    <section
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      id="about"
    >
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-4/4 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-6xl text-6xl mb-40 font-medium text-white">
                      
  Rey & Sons Electric
            <br className="hidden lg:inline-block" />
          </h1>
          <h2 className="mb-8 leading-relaxed text-white text-4xl font-medium">
            About Our Company
          </h2>
          <p className="mb-8 leading-relaxed text-white">
            Rey and Sons LLC was born from one father's excellent work ethic and
            desire to build a legacy. Rey has been an electrician for over 20
            years; his three sons have shadowed his work since they were
            children. After graduating High School, the sons took a leap of
            faith and began working on building a company. Rey's years of
            experience, high client satisfaction and professional relationships
            gave the company a seal of trustworthiness. Since 2012 Rey and Sons
            have been subcontracted by major Central Texas companies.
            <br></br>
            Thank You
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
            >
              GET IN TOUCH
            </a>
            <a
              href="#skills"
              className="ml-4 inline-flex text-gray-400 bg-blue-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
            >
              SERVICES
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="" src="" />
        </div>
      </div>
    </section>
  );
}
