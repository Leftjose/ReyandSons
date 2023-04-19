// src/components/Skills.js

import { LightningBoltIcon, ChipIcon } from "@heroicons/react/outline";
import React from "react";
import { skills } from "../data";


export default function Skills() {
    return (
      <section id="skills">
        <div className="container px-5 py-10 mx-auto">
          <div className="text-center mb-20">
            <LightningBoltIcon className="w-10 inline-block mb-4" />
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
              Electrical Services
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Fully licensed electricians can help with any electrical repairs
              or installations. No job is too big or too small for Rey and Sons
              We can assist in any electrical needs your home or business might
              need. We do New Buildings, Remodels, Residential and Commercial.
              We install Tesla charging stations, repair and install electrical
              panels, LED outdoor installation and more!
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
              <div key={skill} className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                  <LightningBoltIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="title-font font-medium text-white">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}




