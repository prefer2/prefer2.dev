import { THEME } from "constants/index";

export type ThemeMode = typeof THEME[keyof typeof THEME];
