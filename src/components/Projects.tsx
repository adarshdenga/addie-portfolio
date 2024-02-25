import { useState } from "react";
import network from "../assets/projectimages/network.png";

export default function Projects() {
  const projects = [
    {
      name: "AI Project",
      skills: ["SKILL", "SKILL", "SKILL"],
      image: network,
      about:
        "This was a project about AI. It is Artificially Intelligent. It has many intelligence.",
    },
    {
      name: "AI Project",
      skills: ["SKILL", "SKILL", "SKILL"],
      image: network,
      about:
        "This was a project about AI. It is Artificially Intelligent. It has many intelligence.",
    },
    {
      name: "AI Project",
      skills: ["SKILL", "SKILL", "SKILL"],
      image: network,
      about:
        "This was a project about AI. It is Artificially Intelligent. It has many intelligence.",
    },
    {
      name: "AI Project",
      skills: ["SKILL", "SKILL", "SKILL"],
      image: network,
      about:
        "This was a project about AI. It is Artificially Intelligent. It has many intelligence.",
    },
    {
      name: "AI Project",
      skills: ["SKILL", "SKILL", "SKILL"],
      image: network,
      about:
        "This was a project about AI. It is Artificially Intelligent. It has many intelligence.",
    },
    {
      name: "AI Project",
      skills: ["SKILL", "SKILL", "SKILL"],
      image: network,
      about:
        "This was a project about AI. It is Artificially Intelligent. It has many intelligence.",
    },
    {
      name: "AI Project",
      skills: ["SKILL", "SKILL", "SKILL"],
      image: network,
      about:
        "This was a project about AI. It is Artificially Intelligent. It has many intelligence.",
    },
    {
      name: "AI Project",
      skills: ["SKILL", "SKILL", "SKILL"],
      image: network,
      about:
        "This was a project about AI. It is Artificially Intelligent. It has many intelligence.",
    },
    {
      name: "AI Project",
      skills: ["SKILL", "SKILL", "SKILL"],
      image: network,
      about:
        "This was a project about AI. It is Artificially Intelligent. It has many intelligence.",
    },
    {
      name: "AI Project",
      skills: ["SKILL", "SKILL", "SKILL"],
      image: network,
      about:
        "This was a project about AI. It is Artificially Intelligent. It has many intelligence.",
    },
  ];

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
      -90
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
    <div className="flex overflow-auto scrollbar-hide">
      <div className="flex flex-nowrap gap-8" id="track">
        {projects.map((project) => (
          <div className="w-80 h-96 flex flex-col border-2 border-solid border-gray rounded-lg font-inter">
            <img
              className="rounded-t-lg"
              src={project.image}
              draggable="false"
            ></img>
            <div className="flex flex-col p-4 gap-2">
              <p className="font-bold">{project.name}</p>
              <p>{project.about}</p>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.skills.map((skill) => (
                  <div className="bg-gray rounded-full px-2 text-white">
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
