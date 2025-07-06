import React from "react";
import background from "@/assests/banner_background.jpg";
import Image from "next/image";
import logo from "@/assests/zcodium_logo.png";
import { FaAngleDoubleDown } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen">
      <Image
        src={background}
        fill
        alt="image"
        className="object-cover absolute"
      />
      <div className=" relative flex flex-col items-center">
        <Image src={logo} width={800} height={200} alt="logo" className="" />
        <h1 className="text-white text-lg tracking-[11px] -mt-6">
          Architecting Seamless Digital Experiences.
        </h1>
        <div className="text-white my-8 py-2 px-6 rounded-full flex items-center font-bold">
          {"scroll_for".split("").map((item, idx) => (
            <p className=" uppercase flex flex-col items-center" key={idx}>
              {item}
            </p>
          ))}
          <div className="mx-3">
            <FaAngleDoubleDown size={24} />
          </div>
          {"discover_more".split("").map((item, idx) => (
            <p className=" uppercase flex flex-col items-center" key={idx}>
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
