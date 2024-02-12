import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Sections() {
  const { selectedIndex, setSelectedIndex } = useContext(UserContext);

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
