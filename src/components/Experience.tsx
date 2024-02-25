export default function Expereince() {
  const internships = [
    {
      name: "Wappler",
      title: "Full Stack Developer",
      duration: "Nov. 2020 - Feb. 2021",
    },
  ];

  return (
    <div className="flex flex-col text-left md:text-right lg:text-right font-inter">
      <p className="text-6xl mb-10">Internships</p>
      {internships.map((internship) => (
        <div className="flex flex-col gap-1">
          <p className="text-lg md:text-4xl lg:text-4xl">{internship.title}</p>
          <p className="text-base md:text-3xl lg:text-3xl">
            @ {internship.name}
          </p>
          <p className="md:text-xl lg:text-xl text-lightgray">
            {internship.duration}
          </p>
        </div>
      ))}
    </div>
  );
}
