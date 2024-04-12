import Skills from "./Skills";

export default function AboutMe() {
  return (
    <div className="flex flex-col font-inter justify-center text-center md:text-right lg:text-right gap-3 fade-appear">
      <div className="text-lg md:text-2xl lg:text-5xl mb-5 font-extrabold">
        Developer. Problem-Solver.
      </div>
      <div className="text-xl mb-10 font-inter">
        I'm a passionate programmer and Master's student specialising in
        Artificial Intelligence currently based in the Netherlands. Get in
        touch!
      </div>
      <Skills />
    </div>
  );
}
