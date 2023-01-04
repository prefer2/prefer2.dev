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
    <header className="flex flex-row justify-between items-center h-16 border-b">
      <Link className="p-4 text-xl font-bold" href={"/"}>
        Prefer2
      </Link>
      <div className="flex">
        <Nav />
        <button className="mr-10" onClick={onToggleTheme}>
          {theme === "dark" ? <Moon /> : <Sun />}
        </button>
      </div>
    </header>
  );
};

export default Header;
