import java from "../assets/icons/java.png";
import python from "../assets/icons/python.png";
import tensorflow from "../assets/icons/tensorflow.png";
import pytorch from "../assets/icons/pytorch.png";
import react from "../assets/icons/react.png";
import typescript from "../assets/icons/typescript.png";
import javascript from "../assets/icons/javascript.png";
import tailwindcss from "../assets/icons/tailwindcss.png";
import html5 from "../assets/icons/html5.png";
import css3 from "../assets/icons/css3.png";
import git from "../assets/icons/git.png";
import svelte from "../assets/icons/svelte.png";
import linux from "../assets/icons/linux.png";

export default function Skills() {
  const skills = [
    { name: "Java", source: java },
    { name: "Python", source: python },
    { name: "TensorFlow", source: tensorflow },
    { name: "PyTorch", source: pytorch },
    { name: "React", source: react },
    { name: "Svelte", source: svelte },
    { name: "TypeScript", source: typescript },
    { name: "JavaScript", source: javascript },
    { name: "TailwindCSS", source: tailwindcss },
    { name: "HTML5", source: html5 },
    { name: "CSS3", source: css3 },
    { name: "Linux", source: linux },
    { name: "Git", source: git },
  ];

  return (
    <div className="flex flex-wrap justify-center md:justify-end lg:justify-end content-start gap-2">
      {skills.map((skill) => (
        <div className="flex flex-row justify-center gap-2 p-2 bg-white bg-opacity-10 rounded-full font-inter text-xs">
          <img
            src={skill.source}
            className="h-4 w-4 md:h-4 lg:h-4 md:w-4 lg:w-4"
          ></img>
          <div>{skill.name}</div>
        </div>
      ))}
    </div>
  );
}
