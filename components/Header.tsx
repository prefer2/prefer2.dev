import Nav from "@components/Nav";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center h-16 bg-indigo-400">
      <div>Prefer2</div>
      <Nav />
    </header>
  );
};

export default Header;
