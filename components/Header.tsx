import Link from "next/link";

import Nav from "@components/Nav";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center h-16 border-b">
      <Link className="p-4 text-xl font-bold" href={"/"}>
        Prefer2
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
