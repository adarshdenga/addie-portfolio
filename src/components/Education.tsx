export default function Education() {
  const schools = [
    {
      name: "Delft University of Technology",
      place: "Delft, NL",
      years: "2021-present",
    },
    {
      name: "University of Twente",
      place: "Enschede, NL",
      years: "2018-2021",
    },
    {
      name: "Rishi Valley School",
      place: "Andhra Pradesh, IN",
      years: "2010-2017",
    },
  ];

  return (
    <div>
      {schools.map((school) => (
        <div>
          <p>{school.name}</p>
          <p>{school.place}</p>
          <p>{school.years}</p>
        </div>
      ))}
    </div>
  );
}
