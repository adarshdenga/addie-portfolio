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
    hoveredSection.className = "blur-sm line-through";
  }

  function handleOnMouseOut(e: MouseEvent, index: Number) {
    const hoveredSection = e.target as Element;
    if (index == selectedIndex) {
      hoveredSection.className = "";
    } else {
      hoveredSection.className = "blur-sm";
    }
  }

  return (
    <div className="text-white flex flex-row md:flex-col lg:flex-col gap-2 md:gap-0 lg:gap-0 text-lg md:text-5xl lg:text-8xl font-barlow justify-center md:justify-normal lg:justify-normal">
      {sections.map((section, index) => (
        <p
          className={selectedIndex === index ? "" : "blur-sm"}
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
