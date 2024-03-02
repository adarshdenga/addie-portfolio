import cv from "../assets/cv/cv.pdf";
import Skills from "./Skills";

export default function AboutMe() {
  return (
    <div className="flex flex-col font-inter justify-center text-right gap-3 fade-appear">
      <div className="text-4xl mb-5">
        I'm a programmer who has a passion for solving problems in unique and
        innovative ways. Get in touch :)
      </div>
      <Skills />
      <a href={cv} target="_blank">
        Here's my résumé!
      </a>
    </div>
  );
}
