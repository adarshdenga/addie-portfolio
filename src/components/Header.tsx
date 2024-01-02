export default function Header() {
  const links = ["about", "projects", "contact"];

  function StrikeThrough(event: any) {
    event.target.className = "m-4 font-bold overline";
  }

  function DeStrikeThrough(event: any) {
    event.target.className = "m-4 font-bold";
  }

  return (
    <header className="fixed container inset-x-0 py-4 flex flex-row justify-between">
      <div className="font-arsenica text-4xl text-salmon">ad!</div>
      <div className="font-montserrat justify-between text-cloudwhite">
        {links.map((link) => (
          <a
            className={"m-4 font-bold"}
            onMouseOver={StrikeThrough}
            onMouseOut={DeStrikeThrough}
          >
            {link}
          </a>
        ))}
      </div>
    </header>
  );
}
