import { atom } from "recoil";

import { THEME_KEY, THEME_TYPE } from "constants/index";
import { ThemeMode } from "types";

const isLocalStorage = typeof window !== "undefined";

const localStorageThemeEffect =
  () =>
  ({ setSelf, onSet }: any) => {
    if (!isLocalStorage) return;

    const savedValue =
      localStorage.getItem(THEME_KEY) ??
      (window.matchMedia("(prefers-color-scheme:dark)").matches
        ? THEME_TYPE.DARK
        : THEME_TYPE.LIGHT);
    setSelf(savedValue);
    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset
        ? localStorage.removeItem(THEME_KEY)
        : localStorage.setItem(THEME_KEY, newValue);
    });
  };

export const themeState = atom<ThemeMode | null>({
  key: "themeState",
  default: null,
  effects: [localStorageThemeEffect()],
});
