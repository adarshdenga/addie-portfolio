export default function Skills() {

  const skills = [
    { name: "Java", source: "src/assets/icons/java.png" },
    { name: "Python", source: "src/assets/icons/python.png" },
    { name: "TensorFlow", source: "src/assets/icons/tensorflow.png" },
    { name: "PyTorch", source: "src/assets/icons/pytorch.png" },
    { name: "React", source: "src/assets/icons/react.png" },
    { name: "TypeScript", source: "src/assets/icons/typescript.png" },
    { name: "JavaScript", source: "src/assets/icons/javascript.png" },
    { name: "TailwindCSS", source: "src/assets/icons/tailwindcss.png" },
    { name: "HTML5", source: "src/assets/icons/html5.png" },
    { name: "CSS3", source: "src/assets/icons/css3.png" },
    { name: "Bootstrap", source: "src/assets/icons/bootstrap.png" },
    { name: "Git", source: "src/assets/icons/git.png" },
  ];

  return (
    <div className="flex flex-wrap justify-end content-start gap-2">
      {skills.map((skill) => (
        <div className="flex flex-row justify-center gap-2 p-2 bg-gray rounded-full font-inter text-sm">
          <img src={skill.source} className="h-5 w-5"></img>
          <div>{skill.name}</div>
        </div>
      ))}
    </div>
  );
}
