export default function Header() {
  const links = ["about", "projects", "contact"];

  function StrikeThrough(event: any) {
    event.target.className = "m-4 font-bold overline";
  }

  function DeStrikeThrough(event: any) {
    event.target.className = "m-4 font-bold";
  }

  return (
    <header className="fixed container inset-x-0 py-4 flex flex-row bg-white justify-between items-center border-b-2 border-charcoal">
      <div className="font-arsenica text-4xl text-charcoal">ad!</div>
      <div className="font-montserrat justify-between text-charcoal">
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
