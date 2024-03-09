import cv from "../assets/cv/cv.pdf";
import Skills from "./Skills";

export default function AboutMe() {
  return (
    <div className="flex flex-col font-inter justify-center text-center md:text-right lg:text-right gap-3 fade-appear">
      <div className="text-lg md:text-2xl lg:text-4xl mb-5">
        I'm a passionate programmer who is currently based in the Netherlands.
        Get in touch!
      </div>
      <Skills />
      <a href={cv} target="_blank">
        Here's my résumé!
      </a>
    </div>
  );
}
