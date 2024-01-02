export default function Header() {
  const links = ["skills", "education", "contact", "github"];
  return (
    <header className="fixed container inset-x-0 flex flex-row justify-between bg-transparent text-salmon">
      <div className="font-rozha text-4xl">ad!</div>
      <div className="font-montserrat justify-between">
        {links.map((link) => (
          <a className="m-4 text-lg">{link}</a>
        ))}
      </div>
    </header>
  );
}
