import built from "./built.png";
import cv from "./cv.pdf";

export default function AboutMe() {
  return (
    <div className="flex flex-col font-inter justify-center">
      <img src={built} className="w-2/3"></img>
      <a href={cv} target="_blank">
        (click here for my résumé!)
      </a>
    </div>
  );
}
