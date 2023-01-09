import Link from "next/link";

import useThemeMode from "hooks/useThemeMode";

import Nav from "@components/Nav";

import Moon from "assests/icons/Moon";
import Sun from "assests/icons/Sun";

import { THEME_TYPE } from "constants/index";
import { useEffect, useState } from "react";
import ScrollProgressBar from "./ScrollProgressBar";

const Header = () => {
  const { themeMode, setThemeMode } = useThemeMode();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (document) {
      setIsLoaded(true);
    }
  }, []);

  if (!isLoaded) return <></>;

  const handleThemeToggle = () => {
    themeMode === THEME_TYPE.DARK
      ? setThemeMode(THEME_TYPE.LIGHT)
      : setThemeMode(THEME_TYPE.DARK);
  };

  return (
    <>
      <header className="fixed top-0 w-full flex flex-row justify-between items-center h-16 px-5 border-b bg-white lg:px-10 dark:bg-code-dark dark:border-b-gray-900">
        <Link className="py-4 text-xl font-bold" href={"/"}>
          Prefer2
        </Link>
        <div className="flex">
          <Nav />
          <button onClick={handleThemeToggle}>
            {themeMode === THEME_TYPE.DARK ? <Moon /> : <Sun />}
          </button>
        </div>
      </header>
      <ScrollProgressBar />
    </>
  );
};

export default Header;
