import { useContext } from "react";
import { UserContext } from "./UserContext";

export default function Info() {
  const { selectedIndex } = useContext(UserContext);

  return (
    <div className="w-1/2 justify-center flex flex-col text-white">
      {selectedIndex}
    </div>
  );
}
