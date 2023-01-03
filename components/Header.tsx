import Link from "next/link";

import Nav from "@components/Nav";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center h-16 bg-gradient-to-r from-green-600 to-blue-500">
      <Link className="p-4 text-xl font-bold text-white" href={"/"}>
        Prefer2
      </Link>
      <Nav />
    </header>
  );
};

export default Header;
