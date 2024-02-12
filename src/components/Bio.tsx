import Nav from "./Nav";
import { useState } from "react";
import { UserContext } from "./UserContext";
import Info from "./Info";

export default function Bio() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="container mx-auto flex flex-row h-full justify-center">
      <UserContext.Provider value={{ selectedIndex, setSelectedIndex }}>
        <Nav />
        <Info />
      </UserContext.Provider>
    </div>
  );
}
