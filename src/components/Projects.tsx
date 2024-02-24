import { useState } from "react";

export default function Projects() {
  const projects = [
    {
      name: "Project 1",
      about: ["Keyword", "Keyword", "Keyword"],
    },
    {
      name: "Project 2",
      about: ["Keyword", "Keyword", "Keyword"],
    },
    {
      name: "Project 3",
      about: ["Keyword", "Keyword", "Keyword"],
    },
    {
      name: "Project 4",
      about: ["Keyword", "Keyword", "Keyword"],
    },
    {
      name: "Project 5",
      about: ["Keyword", "Keyword", "Keyword"],
    },
    {
      name: "Project 6",
      about: ["Keyword", "Keyword", "Keyword"],
    },
    {
      name: "Project 7",
      about: ["Keyword", "Keyword", "Keyword"],
    },
    {
      name: "Project 8",
      about: ["Keyword", "Keyword", "Keyword"],
    },
    {
      name: "Project 9",
      about: ["Keyword", "Keyword", "Keyword"],
    },
    {
      name: "Project 10",
      about: ["Keyword", "Keyword", "Keyword"],
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
      -100
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
    // Reset when mouse up because track shouldn't move when not clicked
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
      <div className="flex flex-nowrap" id="track">
        {projects.map((project) => (
          <div
            className="w-96 h-96 border-2 border-solid border-gray mr-10"
            unselectable="on"
          >
            {project.name}
          </div>
        ))}
      </div>
    </div>
  );
}
