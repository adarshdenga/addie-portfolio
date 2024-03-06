import { useContext } from "react";
import { UserContext } from "../UserContext";
import { MouseEvent } from "react";

export default function Sections() {
  const { selectedIndex, setSelectedIndex } = useContext(UserContext);

  const sections = [
    {
      name: "ABOUT",
    },
    {
      name: "EDUCATION",
    },
    {
      name: "EXPERIENCE",
    },
    {
      name: "PROJECTS",
    },
  ];

  function handleOnMouseEnter(e: MouseEvent, index: Number) {
    if (index == selectedIndex) return;
    const hoveredSection = e.target as Element;
    hoveredSection.className =
      "bg-[linear-gradient(to_right,#818cf8,#e0e7ff,#38bdf8,#e879f9,#38bdf8,#e0e7ff,#818cf8)] bg-[length:200%_auto] animate-gradient bg-clip-text transparent-text";
  }

  function handleOnMouseOut(e: MouseEvent, index: Number) {
    const hoveredSection = e.target as Element;
    if (index == selectedIndex) {
      hoveredSection.className = "text-white";
    } else {
      hoveredSection.className = "text-gray";
    }
  }

  return (
    <div className="flex flex-row md:flex-col lg:flex-col gap-2 md:gap-0 lg:gap-0 text-lg md:text-5xl lg:text-8xl font-barlow justify-center md:justify-normal lg:justify-normal [&>*]:transition-colors">
      {sections.map((section, index) => (
        <p
          className={selectedIndex === index ? "text-white" : "text-gray"}
          onClick={() => {
            setSelectedIndex(index);
          }}
          onMouseEnter={(e) => handleOnMouseEnter(e, index)}
          onMouseOut={(e) => handleOnMouseOut(e, index)}
        >
          {section.name}
        </p>
      ))}
    </div>
  );
}
