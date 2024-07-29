import { useTranslation } from "react-i18next";

import Button from "shared/ui/Button/Button";
import languageIcon from "shared/assets/icons/changeLanguage.png";

import classes from "./LangSwitcher.module.scss";

const LangSwitcher = () => {
  const { t, i18n } = useTranslation();

  function changeLanguage() {
    i18n.changeLanguage(i18n.language === "uk" ? "en" : "uk");
  }

  return (
    <Button className={classes.button} onClick={changeLanguage}>
      <img
        className={classes.image}
        src={languageIcon}
        alt={t("Змінити мову")}
      />
    </Button>
  );
};

export default LangSwitcher;
