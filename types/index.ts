import { THEME_TYPE } from "constants/index";

export type ThemeMode = typeof THEME_TYPE[keyof typeof THEME_TYPE];
