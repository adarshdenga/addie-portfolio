export default function Education() {
  const schools = [
    {
      name: "TU Delft",
      type: "MSc Computer Science (Spec. AI)",
      link: "https://www.tudelft.nl",
      years: "2021 - Present",
    },
    {
      name: "University of Twente",
      type: "BSc Technical Computer Science",
      link: "https://www.utwente.nl",
      years: "2018 - 2021",
    },
    {
      name: "Rishi Valley School",
      type: "Indian School Cerificate (ISC)",
      link: "https://www.rishivalley.org",
      years: "2010 - 2017",
    },
  ];

  return (
    <div className="flex flex-col text-center md:text-right lg:text-right font-inter fade-appear">
      {schools.map((school) => (
        <div className="my-4">
          <p className="text-lg md:text-xl lg:text-4xl bg-[linear-gradient(to_right,#818cf8,#e0e7ff,#38bdf8,#e879f9,#38bdf8,#e0e7ff,#818cf8)] bg-[length:200%_auto] animate-gradient bg-clip-text transparent-text font-bold">
            {school.type}
          </p>
          <p className="text-base md:text-base lg:text-3xl">
            @{" "}
            <a className="hover:underline decoration-dashed" href={school.link}>
              {school.name}
            </a>
          </p>
          <p className="text-base md:text-base lg:text-xl text-lightgray">
            {school.years}
          </p>
        </div>
      ))}
    </div>
  );
}
