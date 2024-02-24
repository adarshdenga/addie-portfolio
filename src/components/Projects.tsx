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

  function handleOnMouseDown(e: MouseEvent) {
    setMouseDownAt(e.clientX);
  }

  function handleOnMouseMove(e: MouseEvent) {
    if (mouseDownAt == 0) return;

    let dx = (mouseDownAt - e.clientX) * -2;

    track.style.transform = `translateX(${dx}px)`;
  }

  function handleOnMouseUp() {
    // Reset when mouse up because track shouldn't move when not clicked
    setMouseDownAt(0);
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
          <div className="w-96 h-96 border-2 border-solid border-white mr-10">
            {project.name}
          </div>
        ))}
      </div>
    </div>
  );
}
