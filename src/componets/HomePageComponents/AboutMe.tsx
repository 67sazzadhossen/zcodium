import React from "react";
import photo from "@/assests/profile_photo.jpg";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex h-screen bg-gray-100 ">
      <div className="w-1/2 flex flex-col justify-center pl-24 ">
        <div className="text-6xl font-bold uppercase relative">
          <h1 className=""> About.</h1>
          <div className="absolute w-[1000px] h-[2px] bg-orange-700 -top-3"></div>
        </div>
        <div className="my-6 space-y-4 text-md">
          <p className="font-semibold">
            I am Md Sazzad Hossen, a Full Stack Web Developer and the founder of
            my brand ZCODIUM. I specialize in transforming innovative ideas into
            robust, scalable, and user-friendly digital experiences. From
            captivating frontend design to powerful backend functionality, I
            work across the entire development stack.
          </p>
          {/* <h1 className="text-lg font-bold">My Core Expertise:</h1>
          <ul>
            <li>
              Frontend: React, Next.js, HTML5, CSS3 (Tailwind CSS, Bootstrap),
              JavaScript (ES6+), UI/UX.
            </li>
            <li>
              {" "}
              Backend: Node.js (Express), Python (Django/Flask), RESTful APIs.
            </li>
            <li>Databases: MongoDB, PostgreSQL, MySQL.</li>
            <li>Cloud/DevOps (Familiarity): AWS, Docker, Git/GitHub.</li>
          </ul> */}
          {/* <h1 className="text-lg font-bold">My Work Philosophy:</h1>{" "} */}
          <p>
            I believe in crafting clean, maintainable, and high-performance
            code. I prioritize user experience and problem-solving in every
            project. Continuously learning and staying updated with technology
            are integral parts of my work.
          </p>{" "}
          {/* <h1 className="text-lg font-bold">Let`s Connect:</h1> */}
          <p>
            I am ready to discuss your next extraordinary project. Feel free to
            get in touch to learn how ZCODIUM can help you achieve your digital
            goals.
          </p>
        </div>
      </div>
      <div className="w-1/2  overflow-hidden">
        <Image
          src={photo}
          width={1200}
          height={400}
          alt="photo"
          className=" "
        />
      </div>
    </div>
  );
};

export default AboutMe;
