import { createContext } from "react";

export const UserContext = createContext<{
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}>({
  selectedIndex: 0,
  setSelectedIndex: () => {},
});
