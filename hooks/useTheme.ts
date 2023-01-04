import { useState } from "react";

import { THEME_KEY, THEME } from "constants/index";
import { ThemeMode } from "types";

const useTheme = () => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(THEME.LIGHT);

  const changeThemeToDark = () => {
    document.documentElement.classList.add(THEME.DARK);
    localStorage.setItem(THEME_KEY, THEME.DARK);
    setThemeMode(THEME.DARK);
  };

  const changeThemeToLight = () => {
    document.documentElement.classList.remove(THEME.DARK);
    localStorage.setItem(THEME_KEY, THEME.LIGHT);
    setThemeMode(THEME.LIGHT);
  };

  return { themeMode, changeThemeToDark, changeThemeToLight };
};

export default useTheme;
