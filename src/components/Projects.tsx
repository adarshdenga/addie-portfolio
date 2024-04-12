import { useState } from "react";
import network from "../assets/projectimages/network.png";
import tsp from "../assets/projectimages/tsp.png";
import cias from "../assets/projectimages/cias.png";
import vret from "../assets/projectimages/vret.png";
import aapfl from "../assets/projectimages/aapfl.png";
import cube from "../assets/projectimages/cube.png";
import website from "../assets/projectimages/website.png";
import { FaLink } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "EVCP",
      skills: ["Python", "RL", "AI"],
      image: network,
      link: "https://github.com/adarshdenga/Electric-Vehicle-Charging-Planning",
      about:
        "An actor-critic based Reinforcement Learning model to simualte optimal EV charging within a DC grid.",
    },
    {
      name: "Circles in a Square",
      skills: ["Python", "Evolutionary Algorithms", "AI", "Optimisation"],
      image: cias,
      link: "https://github.com/adarshdenga/Circles-In-A-Square",
      about:
        "An evolutionary algorithms based approach to the famous problem of packing circles into a square.",
    },
    {
      name: "Travelling Salesperson",
      skills: ["Python", "Evolutionary Algorithms", "AI", "Optimisation"],
      image: tsp,
      link: "https://github.com/adarshdenga/Traveling-Salesperson-Problem",
      about:
        "An evolutionary algorithms based approach to the famous Travelling Salesperson Problem.",
    },
    {
      name: "Sociable",
      skills: ["Unity", "C#", "Python", "VR", "Serious Games"],
      image: vret,
      link: "https://github.com/adarshdenga/Sociable-VR",
      about:
        "A  VR Exposure Therapy game for the purpose of combating social anxiety and its symptoms.",
    },
    {
      name: "AAPFL",
      skills: ["Java", "Haskell", "Compiler Construction"],
      image: aapfl,
      link: "https://github.com/adarshdenga/AAPFL",
      about:
        "A new programming language that is a syntactic mix of JavaScript and Python, with a compiler that produces Sprockell instructions.",
    },
    {
      name: "Cube Area",
      skills: ["Python", "Mathematics", "Convex Hull", "Roation Matrices"],
      image: cube,
      link: "https://github.com/adarshdenga/cube-area-projection",
      about:
        "A fun math project which investigates area of a cube when projected on a 2D surface.",
    },
    {
      name: "This Website!",
      skills: ["React", "Node", "TypeScript", "HTML", "CSS", "Tailwind"],
      image: website,
      link: "https://github.com/adarshdenga/addie-portfolio",
      about:
        "A true passion project which put me through my web development paces!",
    },
  ];

  // TEXMPLATE PROJECT TO EXPAND SECTION
  // {
  //   name: "",
  //   skills: ["", "", ""],
  //   image: img,
  //   link: "",
  //   about:
  //     "",
  // },

  const count = projects.length;
  const maxp = ((count - 1) / count) * 100;

  const track = document.getElementById("track")!;

  const [mouseDownAt, setMouseDownAt] = useState(0);
  const [lastPercentage, setLastPercentage] = useState(0);
  const [percentage, setPercentage] = useState(0);

  function handleOnMouseDown(e: MouseEvent) {
    setMouseDownAt(e.clientX);
  }

  function handleOnMouseMove(e: MouseEvent) {
    if (mouseDownAt == 0) return;

    let dx = mouseDownAt - e.clientX;
    let maxDX = window.innerWidth / 2;

    let percentage = (dx / maxDX) * -100;
    let nextPercentageUnconstrained = lastPercentage + percentage;
    let nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -maxp
    );

    setPercentage(nextPercentage);

    track.animate(
      {
        transform: `translateX(${nextPercentage}%)`,
      },
      { duration: 1200, fill: "forwards" }
    );
  }

  function handleOnMouseUp() {
    setMouseDownAt(0);
    setLastPercentage(percentage);
  }

  window.onmousedown = (e) => {
    handleOnMouseDown(e);
  };

  window.onmousemove = (e) => {
    handleOnMouseMove(e);
  };

  window.onmouseup = () => {
    handleOnMouseUp();
  };

  return (
    <div className="flex overflow-auto scrollbar-hide fade-appear">
      <div className="flex flex-nowrap gap-8" id="track">
        {projects.map((project) => (
          <div className=" bg-white bg-opacity-5 w-80 h-96 flex flex-col border-2 border-solid border-white rounded-lg font-inter overflow-hidden">
            <img
              className="h-1/2 object-cover"
              src={project.image}
              draggable="false"
            ></img>
            <div className="flex flex-col h-1/2 p-4 justify-between">
              <div>
                <div className="w-full justify-between flex flex-row mb-2">
                  <p className="font-bold">{project.name}</p>
                  <a href={project.link} target="_blank">
                    <FaLink />
                  </a>
                </div>
                <p>{project.about}</p>
              </div>
              <div className="flex flex-wrap gap-1 text-xs bottom-0">
                {project.skills.map((skill) => (
                  <div className="bg-white bg-opacity-20 rounded-full px-2 text-white">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
