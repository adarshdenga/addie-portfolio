export default function Expereince() {
  const internships = [
    {
      name: "Wappler",
      link: "https://wappler.io/",
      title: "Full Stack Developer",
      duration: "Nov. 2020 - Feb. 2021",
    },
  ];

  return (
    <div className="flex flex-col text-center md:text-right lg:text-right font-inter fade-appear">
      <p className="text-4xl mb-5 md:text-4xl lg:text-6xl md:mb-10 lg:mb-10 font-bold">
        Internships
      </p>
      {internships.map((internship) => (
        <div className="flex flex-col gap-1">
          <p className="text-lg md:text-xl lg:text-4xl font-bold">
            {internship.title}
          </p>
          <div className="text-base md:text-base lg:text-3xl">
            @{" "}
            <a
              className="hover:underline decoration-dashed"
              href={internship.link}
            >
              {internship.name}
            </a>
          </div>
          <p className="text-base md:text-base lg:text-xl text-lightgray">
            {internship.duration}
          </p>
        </div>
      ))}
    </div>
  );
}
