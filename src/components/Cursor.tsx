import { useEffect, useState } from "react";

export default function Cursor(props: any) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const offset = props.page == 3 ? 32 : 16;

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
          className="flex drag-cursor text-center justify-center items-center text-white font-inter text-xs"
        >
          DRAG
        </div>
      );
    default:
      return (
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
          className="cursor"
        />
      );
  }
}
