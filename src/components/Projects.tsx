import Carousel from "./Carousel";

export default function Projects() {
  // const projects = [
  //   {
  //     name: "Project 1",
  //     about: ["Keyword", "Keyword", "Keyword"],
  //   },
  //   {
  //     name: "Project 2",
  //     about: ["Keyword", "Keyword", "Keyword"],
  //   },
  //   {
  //     name: "Project 3",
  //     about: ["Keyword", "Keyword", "Keyword"],
  //   },
  //   {
  //     name: "Project 4",
  //     about: ["Keyword", "Keyword", "Keyword"],
  //   },
  //   {
  //     name: "Project 5",
  //     about: ["Keyword", "Keyword", "Keyword"],
  //   },
  // ];

  return (
    <div className="flex overflow-x-scroll scrollbar-hide">
      <Carousel />
    </div>
  );
}

/* {projects.map((project) => (
          <div className="w-80 h-96 border-2 border-solid border-white mr-10">
            {project.name}
          </div>
        ))} */
