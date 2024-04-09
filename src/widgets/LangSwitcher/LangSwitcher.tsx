import { useTranslation } from "react-i18next";

import Button, { BUTTON_THEME } from "shared/ui/Button/Button";

import classes from "./LangSwitcher.module.scss";

const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  function changeLanguage() {
    i18n.changeLanguage(i18n.language === "uk" ? "en" : "uk");
  }

  return (
    <>
      <Button className={classes.button} onClick={changeLanguage}>
        {t("Змінити мову")}
      </Button>
    </>
  );
};

export default LangSwitcher;
