import Socials from "./Socials";
import Sections from "./Sections";

export default function Nav() {
  return (
    <div className="w-full md:w-1/2 lg:w-1/2 justify-center flex flex-col">
      <Socials />
      <Sections />
    </div>
  );
}
