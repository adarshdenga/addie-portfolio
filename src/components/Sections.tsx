import { useContext } from "react";
import { UserContext } from "../UserContext";

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

  return (
    <div className="flex flex-row md:flex-col lg:flex-col text-gray text-lg md:text-5xl lg:text-8xl font-barlow justify-center md:justify-normal lg:justify-normal">
      {sections.map((section, index) => (
        <div
          className={selectedIndex === index ? "text-white mr-2" : "mr-2"}
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
