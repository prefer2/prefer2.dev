import { useEffect } from "react";
import { useRecoilState } from "recoil";

import { THEME_TYPE } from "constants/index";
import { ThemeMode } from "types";
import { themeState } from "atoms";

const useThemeMode = () => {
  const [themeMode, setThemeMode] = useRecoilState<ThemeMode | null>(
    themeState
  );

  useEffect(() => {
    if (themeMode === THEME_TYPE.DARK) {
      document.documentElement.classList.add(THEME_TYPE.DARK);
    } else {
      document.documentElement.classList.remove(THEME_TYPE.DARK);
    }
  }, [themeMode]);

  return { themeMode, setThemeMode };
};

export default useThemeMode;
