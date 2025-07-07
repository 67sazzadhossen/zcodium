"use client";
import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import logo from "@/assests/zcodium_logo_blue.png";
import Image from "next/image";
import { projects } from "@/app/utils/projectData";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Projects = () => {
  const projectsData = projects;
  const headingContainer = useRef<HTMLDivElement | null>(null);
  const sectionContainer = useRef<HTMLDivElement | null>(null);
  const logoContainer = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);
  console.log(width);

  useGSAP(() => {
    const width = headingContainer.current?.offsetWidth ?? 0;
    setWidth(width);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionContainer.current,
        start: "top top",
        scrub: 1.5,
        pin: true,
      },
    });

    tl.to(
      headingContainer.current,
      {
        x: -width + 700,
      },
      "a"
    );

    tl.to(
      logoContainer.current,

      { x: 1000 },
      "a"
    );
  });

  return (
    <div>
      <div ref={sectionContainer} className="min-h-screen overflow-x-hidden">
        {/* Animation Part */}
        <div
          ref={headingContainer}
          className="min-h-screen text-[30vw] whitespace-nowrap uppercase font-bold relative text-[#0b143a]"
        >
          Projects
          <div className="">
            {" "}
            <div
              ref={logoContainer}
              className={`absolute top-[73%] -translate-x-[2550px] flex `}
            >
              {Array.from({ length: 20 }).map((_, idx) => (
                <div
                  className=" w-96 bg-orange-300 -mx-1 px-9 py-3 pt-6"
                  key={idx}
                >
                  {" "}
                  <Image
                    key={idx}
                    className=""
                    src={logo}
                    width={400}
                    height={100}
                    alt={`logo-${idx}`}
                  />
                  <div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* projects part */}
      <section className="py-12 px-4 md:px-10 bg-white">
        <div className="grid grid-cols-2 gap-16">
          {projectsData.map((project, idx) => (
            <div
              key={idx}
              className="w-full h-[500px] bg-cover bg-center relative flex flex-col justify-end text-white rounded-xl overflow-hidden shadow-lg"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-50% from-black  to-transparent opacity-90"></div>

              <div className="relative p-10 z-10 flex justify-between items-end">
                <div>
                  <h1 className="text-4xl font-bold mb-3">{project.title}</h1>
                  <p className="mb-4 text-sm max-w-md">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white text-black px-3 py-1 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-lg hover:bg-gray-200 transition whitespace-nowrap mb-4 "
                >
                  Visit Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
