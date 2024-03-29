export default function Education() {
  const schools = [
    {
      name: "TU Delft",
      type: "MSc Computer Science (Spec. AI)",
      years: "2021 - Present",
    },
    {
      name: "University of Twente",
      type: "BSc Technical Computer Science",
      years: "2018 - 2021",
    },
    {
      name: "Rishi Valley School",
      type: "Indian School Cerificate (ISC)",
      years: "2010 - 2017",
    },
  ];

  return (
    <div className="flex flex-col text-center md:text-right lg:text-right font-inter fade-appear">
      {schools.map((school) => (
        <div className="my-4">
          <p className="text-lg md:text-xl lg:text-4xl">{school.type}</p>
          <p className="text-base md:text-base lg:text-3xl">@ {school.name}</p>
          <p className="text-base md:text-base lg:text-xl text-lightgray">
            {school.years}
          </p>
        </div>
      ))}
    </div>
  );
}
