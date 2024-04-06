import AppLink, { APP_LINK_THEME } from "shared/ui/AppLink/AppLink";

import { ROUTS_PATHS } from "shared/config/routeConfig/routeConfig";
import { classNames } from "shared/lib/classNames/classNames";

import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={classNames(classes.navbar, {}, [className])}>
      <AppLink to={ROUTS_PATHS.MAIN}>Main</AppLink>
      <AppLink to={ROUTS_PATHS.ABOUT}>About</AppLink>
    </nav>
  );
};

export default Navbar;
