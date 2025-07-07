import React from "react";
import { BsBootstrap, BsGithub, BsUiChecks } from "react-icons/bs";
import { CgNpm, CgVercel } from "react-icons/cg";
import {
  DiAws,
  DiCss3,
  DiDatabase,
  DiDjango,
  DiDocker,
  DiHtml5,
  DiJavascript,
  DiMongodb,
  DiMysql,
  DiPostgresql,
  DiPython,
  DiResponsive,
} from "react-icons/di";
import { FaGitSquare, FaNodeJs } from "react-icons/fa";
import { GrIntegration, GrReactjs, GrStatusGood } from "react-icons/gr";
import { MdSyncProblem } from "react-icons/md";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAuth0, SiExpress } from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      skills: [
        {
          name: "React.js",
          description: "Building dynamic and interactive user interfaces.",
          efficiency: "90", // Added efficiency
          icon: <GrReactjs />,
        },
        {
          name: "Next.js",
          description:
            "Server-side rendering (SSR), static site generation (SSG), and optimized React applications.",
          efficiency: "85", // Added efficiency
          icon: <RiNextjsFill />,
        },
        {
          name: "HTML5",
          description: "Semantic markup and web structure.",
          efficiency: "95", // Added efficiency
          icon: <DiHtml5 />,
        },
        {
          name: "CSS3",
          description: "Styling and layout, including advanced features.",
          efficiency: "90", // Added efficiency
          icon: <DiCss3 />,
        },
        {
          name: "Tailwind CSS",
          description: "Rapid and utility-first CSS styling.",
          efficiency: "90", // Added efficiency
          icon: <RiTailwindCssFill />,
        },
        {
          name: "Bootstrap",
          description: "Responsive design framework.",
          efficiency: "80", // Added efficiency
          icon: <BsBootstrap />,
        },
        {
          name: "JavaScript (ES6+)",
          description: "Core programming logic and modern features.",
          efficiency: "90", // Added efficiency
          icon: <DiJavascript />,
        },
        {
          name: "UI/UX Principles",
          description: "Designing intuitive and user-friendly interfaces.",
          efficiency: "80", // Added efficiency
          icon: <BsUiChecks />,
        },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        {
          name: "Node.js",
          description: "Server-side JavaScript runtime.",
          efficiency: "85", // Added efficiency
          icon: <FaNodeJs />,
        },
        {
          name: "Express.js",
          description:
            "Fast, unopinionated, minimalist web framework for Node.js.",
          efficiency: "85", // Added efficiency
          icon: <SiExpress />,
        },
        {
          name: "Python",
          description: "General-purpose programming.",
          efficiency: "75", // Added efficiency
          icon: <DiPython />,
        },
        {
          name: "Django/Flask",
          description: "Python web frameworks for robust backend development.",
          efficiency: "70", // Added efficiency
          icon: <DiDjango />,
        },
        {
          name: "RESTful APIs",
          description:
            "Designing and implementing efficient and scalable APIs.",
          efficiency: "88", // Added efficiency
          icon: <DiDatabase />,
        },
      ],
    },
    {
      category: "Database Management",
      skills: [
        {
          name: "MongoDB",
          description: "NoSQL database for flexible data storage.",
          efficiency: "80", // Added efficiency
          icon: <DiMongodb />,
        },
        {
          name: "PostgreSQL",
          description: "Powerful, open-source relational database.",
          efficiency: "75", // Added efficiency
          icon: <DiPostgresql />,
        },
        {
          name: "MySQL",
          description: "Popular open-source relational database.",
          efficiency: "70", // Added efficiency
          icon: <DiMysql />,
        },
      ],
    },
    {
      category: "Tools & Version Control",
      skills: [
        {
          name: "Git",
          description: "Distributed version control system.",
          efficiency: "90", // Added efficiency
          icon: <FaGitSquare />,
        },
        {
          name: "GitHub",
          description: "Collaborative code hosting and version control.",
          efficiency: "90", // Added efficiency
          icon: <BsGithub />,
        },
        {
          name: "VS Code",
          description: "Primary code editor.",
          efficiency: "95", // Added efficiency
          icon: <VscCode />,
        },
        {
          name: "npm/Yarn",
          description: "Package managers for JavaScript projects.",
          efficiency: "85", // Added efficiency
          icon: <CgNpm />,
        },
      ],
    },
    {
      category: "Cloud & Deployment",
      skills: [
        {
          name: "AWS (Amazon Web Services)",
          description:
            "Basic understanding of services like EC2, S3, Lambda, Amplify (if applicable).",
          efficiency: "65", // Added efficiency
          icon: <DiAws />,
        },
        {
          name: "Docker",
          description:
            "Containerization for consistent development and deployment environments.",
          efficiency: "70", // Added efficiency
          icon: <DiDocker />,
        },
        {
          name: "Netlify/Vercel",
          description:
            "(Optional, if you use them for deployment) For deploying frontend applications.",
          efficiency: "80", // Added efficiency
          icon: <CgVercel />,
        },
      ],
    },
    {
      category: "Other Skills",
      skills: [
        {
          name: "Responsive Web Design",
          description:
            "Ensuring applications work seamlessly across all devices.",
          efficiency: "90", // Added efficiency
          icon: <DiResponsive />,
        },
        {
          name: "Performance Optimization",
          description: "Techniques for improving website speed and efficiency.",
          efficiency: "80", // Added efficiency
          icon: <GrStatusGood />,
        },
        {
          name: "Problem Solving",
          description:
            "Analytical approach to debugging and developing solutions.",
          efficiency: "92", // Added efficiency
          icon: <MdSyncProblem />,
        },
        {
          name: "API Integration",
          description: "Connecting various third-party services.",
          efficiency: "85", // Added efficiency
          icon: <GrIntegration />,
        },
        {
          name: "Authentication & Authorization",
          description: "Implementing secure user management.",
          efficiency: "80", // Added efficiency
          icon: <SiAuth0 />,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-bl from-30% to-blue-950 from-black text-white">
      <div className=" py-12 max-w-[90%] mx-auto">
        <h1 className="text-4xl">The Technologies I Master</h1>
        <p className="w-3/4 my-3">
          As a Full Stack Web Developer, my proficiency spans across a wide
          array of modern technologies and tools, enabling me to build robust,
          efficient, and visually appealing web applications. My commitment to
          continuous learning ensures that I stay at the forefront of industry
          trends, delivering solutions that are not just current but
          future-ready. This section highlights the core technologies and
          platforms I leverage to bring digital visions to life.
        </p>

        <div className="my-16">
          <div className="flex flex-wrap justify-center gap-12">
            {skills.map((item) =>
              item.skills.map((skill, idx) => (
                <div
                  className="text-7xl border-[0.5px] border-blue-900 p-3 rounded-3xl"
                  key={idx}
                >
                  {skill.icon}
                </div>
              ))
            )}
          </div>
        </div>

        <div className="">
          {skills.map((item, idx) => (
            <div key={idx} className="my-16">
              <h1 className="font-semibold my-16 text-4xl">{item.category}</h1>
              <ul className="grid grid-cols-2 gap-16">
                {item.skills.map((skill, idx) => (
                  <li key={idx}>
                    <div className="flex justify-between items-end">
                      <div className="flex flex-row-reverse justify-end items-end gap-3">
                        <h1 className="text-xl mb-5">{skill.name}</h1>
                        <div>
                          {" "}
                          {skill.icon && (
                            <div className="text-6xl border border-white inline-block p-2 rounded-xl">
                              {skill.icon}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="text-xl mr-1">{skill.efficiency}</span>
                        %
                      </div>
                    </div>

                    <div className="w-full h-1 bg-gray-700 rounded-full mt-4 relative">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-700 ease-out relative"
                        style={{ width: `${skill.efficiency}%` }}
                      >
                        <div className="h-4 w-4 bg-blue-900 border-2 border-white absolute rounded-full -top-1.5 right-0 shadow-md"></div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
