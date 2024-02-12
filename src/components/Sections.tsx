import { useState } from "react";

export default function Sections() {
  const sections = [
    {
      name: "ABOUT ME",
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

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="flex flex-col text-gray text-8xl font-barlow">
      {sections.map((section, index) => (
        <div
          className={selectedIndex === index ? "text-white" : ""}
          onClick={() => {
            setSelectedIndex(index);
          }}
        >
          {section.name}
        </div>
      ))}
    </div>
  );
}
