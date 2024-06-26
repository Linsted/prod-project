import { useContext } from "react";

import { LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext } from "./ThemeContext";

interface UseThemeResult {
  toggleTheme: () => void;
  theme: THEME;
}

const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;

    setTheme(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  }

  return {
    toggleTheme,
    theme,
  };
};

export default useTheme;
