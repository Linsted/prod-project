import { useTranslation } from "react-i18next";
import AppLink from "shared/ui/AppLink/AppLink";
import ThemeSwitcher from "widgets/ThemeSwitcher/ui/ThemeSwitcher";

import Button, { BUTTON_THEME } from "shared/ui/Button/Button";
import Modal from "shared/ui/Modal/Modal";

import { ROUTS_PATHS } from "shared/config/routeConfig/routeConfig";
import classNames from "shared/lib/classNames/classNames";

import { useState } from "react";
import classes from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  function toogleModal() {
    setIsAuthModalOpen((prev) => !prev);
  }

  return (
    <nav className={classNames(classes.navbar, {}, [className])}>
      <AppLink to={ROUTS_PATHS.MAIN}>{t("Головна")}</AppLink>
      <AppLink to={ROUTS_PATHS.ABOUT}>{t("Про нас")}</AppLink>
      <ThemeSwitcher />
      <Button theme={BUTTON_THEME.CLEAR_INVERTED} onClick={toogleModal}>
        {t("Увійти")}
      </Button>
      <Modal isOpen={isAuthModalOpen} onClose={toogleModal}>
        HELLO WORLD{" "}
      </Modal>
    </nav>
  );
};

export default Navbar;
