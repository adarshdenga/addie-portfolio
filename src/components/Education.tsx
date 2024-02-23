export default function Education() {
  const schools = [
    {
      name: "TU Delft",
      type: "MSc Computer Science (AI)",
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
      years: "2010-2017",
    },
  ];

  return (
    <div className="flex flex-col text-right font-barlow">
      {schools.map((school) => (
        <div className="mb-8">
          <p className="text-4xl">{school.type}</p>
          <p className="text-4xl">{school.name}</p>
          <p className="text-xl text-lightgray">{school.years}</p>
        </div>
      ))}
    </div>
  );
}
