export default function Skills() {
  //   const skills = [
  //     "Java",
  //     "Python",
  //     "TensorFlow",
  //     "PyTorch",
  //     "React",
  //     "TypeScript",
  //     "JavaScript",
  //     "TailwindCSS",
  //     "HTML5",
  //     "CSS3",
  //     "Bootstrap",
  //     "Git",
  //   ];

  const skills = [
    { name: "Java", source: "src/icons/java.png" },
    { name: "Python", source: "src/icons/python.png" },
    { name: "TensorFlow", source: "src/icons/tensorflow.png" },
    { name: "PyTorch", source: "src/icons/pytorch.png" },
    { name: "React", source: "src/icons/react.png" },
    { name: "TypeScript", source: "src/icons/typescript.png" },
    { name: "JavaScript", source: "src/icons/javascript.png" },
    { name: "TailwindCSS", source: "src/icons/tailwindcss.png" },
    { name: "HTML5", source: "src/icons/html5.png" },
    { name: "CSS3", source: "src/icons/css3.png" },
    { name: "Bootstrap", source: "src/icons/bootstrap.png" },
    { name: "Git", source: "src/icons/git.png" },
  ];

  return (
    <div className="w-1/2 flex flex-col justify-center">
      <div className="w-full h-2/5">
        <div className="font-arsenica text-charcoal text-6xl mb-4 text-right">
          skills
        </div>
        <div className="flex flex-wrap justify-end content-start">
          {skills.map((skill) => (
            <div className="flex flex-row justify-center p-2 m-1 font-montserrat text-charcoal font-bold border-2 border-coolslate rounded-full">
              <img src={skill.source} className="h-5 w-5"></img>
              <div className="px-2 text-sm">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
