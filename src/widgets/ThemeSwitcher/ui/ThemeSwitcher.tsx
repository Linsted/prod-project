import useTheme from "shared/config/theme/useTheme";

import DarkThemeIcon from "shared/assets/icons/theme-dark.svg";
import LightThemeIcon from "shared/assets/icons/theme-light.svg";
import Button, { BUTTON_THEME } from "shared/ui/Button/Button";

import { THEME } from "shared/config/theme/ThemeContext";

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button theme={BUTTON_THEME.CLEAR} onClick={toggleTheme}>
      {theme === THEME.DARK ? <DarkThemeIcon /> : <LightThemeIcon />}
    </Button>
  );
};

export default ThemeSwitcher;
