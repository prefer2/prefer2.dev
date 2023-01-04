import { useState } from "react";

import { THEME_KEY } from "constants";
import { ThemeMode } from "types";

const useTheme = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");

  const changeThemeToDark = () => {
    document.documentElement.classList.add("dark");
    localStorage.setItem(THEME_KEY, "dark");
    setThemeMode("dark");
  };

  const changeThemeToLight = () => {
    document.documentElement.classList.remove("dark");
    localStorage.setItem(THEME_KEY, "light");
    setThemeMode("light");
  };

  return { themeMode, changeThemeToDark, changeThemeToLight };
};

export default useTheme;
