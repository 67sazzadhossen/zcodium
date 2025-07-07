import AboutMe from "@/componets/HomePageComponents/AboutMe";
import Banner from "@/componets/HomePageComponents/Banner";
import Projects from "@/componets/HomePageComponents/Projects";
import Skills from "@/componets/HomePageComponents/Skills";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <AboutMe />
      <Skills />
      <Projects />
    </div>
  );
};

export default HomePage;
