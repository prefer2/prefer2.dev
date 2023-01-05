import { useState } from "react";
import Link from "next/link";

import Nav from "@components/Nav";

import Moon from "assests/moon";
import Sun from "assests/sun";
import { ThemeMode } from "types";

interface HeaderProps {
  theme: ThemeMode;
  onToggleTheme: React.MouseEventHandler;
}

const Header = ({ theme, onToggleTheme }: HeaderProps) => {
  return (
    <header className="flex flex-row justify-between items-center h-16 border-b px-5 lg:px-10">
      <Link className="py-4 text-xl font-bold" href={"/"}>
        Prefer2
      </Link>
      <div className="flex">
        <Nav />
        <button onClick={onToggleTheme}>
          {theme === "dark" ? <Moon /> : <Sun />}
        </button>
      </div>
    </header>
  );
};

export default Header;
