import { useEffect, useState } from "react";

export default function Cursor(props: any) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const offset = 12;

  useEffect(() => {
    addEventListeners();
    return () => removeEventListeners();
  }, []);

  const addEventListeners = () => {
    document.addEventListener("mousemove", onMouseMove);
  };

  const removeEventListeners = () => {
    document.removeEventListener("mousemove", onMouseMove);
  };

  const onMouseMove = (e: any) => {
    setPosition({ x: e.pageX - offset, y: e.pageY - offset });
  };

  console.log(position.x);

  switch (props.page) {
    case 3:
      return (
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          className="flex cursor sm:invisible lg:visible text-center justify-center items-center text-black font-inter text-xs"
        >
          ↔
        </div>
      );
    default:
      return (
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          className="flex cursor sm:invisible lg:visible text-center justify-center items-center text-white text-2xl"
        ></div>
      );
  }
}
