import AppLink from "shared/ui/AppLink/AppLink";
import ThemeSwitcher from "widgets/ThemeSwitcher/ui/ThemeSwitcher";
import { useTranslation } from "react-i18next";

import { ROUTS_PATHS } from "shared/config/routeConfig/routeConfig";
import classNames from "shared/lib/classNames/classNames";

import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <nav className={classNames(classes.navbar, {}, [className])}>
      <AppLink to={ROUTS_PATHS.MAIN}>{t("Головна")}</AppLink>
      <AppLink to={ROUTS_PATHS.ABOUT}>{t("Про нас")}</AppLink>
      <ThemeSwitcher />
    </nav>
  );
};

export default Navbar;
