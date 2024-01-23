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
    <div className="w-1/2 flex flex-col justify-center">
      <div className="w-full h-2/5">
        <div className="font-arsenica text-charcoal text-6xl mb-4">
          education
        </div>
        <ol className="pl-4">
          {schools.map((school) => (
            <li className="font-montserrat text-charcoal font-bold">
              <div className="absolute w-5 h-5 bg-charcoal rounded-full border-4 border-white"></div>
              <div className="border-l-2 pt-0.5 pb-5 pl-5 ml-2 border-coolslate">
                <p className="text-xs italic">{school.years}</p>
                <p className="font-black text-lg">{school.name}</p>
                <p className="text-xs">{school.place}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
