import { useContext } from "react";
import { UserContext } from "../UserContext";
import AboutMe from "./AboutMe";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";

function switchContent(selectedIndex: number) {
  switch (selectedIndex) {
    case 0:
      return <AboutMe />;
    case 1:
      return <Education />;
    case 2:
      return <Experience />;
    case 3:
      return <Projects />;

    default:
      return <></>;
  }
}

export default function Info() {
  const { selectedIndex } = useContext(UserContext);

  return (
    <div className="w-full md:w-1/2 lg:w-1/2 p-4 justify-center flex flex-col text-white">
      {switchContent(selectedIndex)}
    </div>
  );
}
