import Socials from "./Socials";
import Sections from "./Sections";

export default function Nav() {
  return (
    <div className="w-1/2 flex flex-col">
      <Socials />
      <Sections />
    </div>
  );
}
