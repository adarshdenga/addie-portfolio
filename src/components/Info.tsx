import Education from "./Education";
import Skills from "./Skills";

export default function Info() {
  return (
    <div className="container mx-auto flex flex-row h-full">
      <Education />
      <Skills />
    </div>
  );
}
