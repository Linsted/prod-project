import { useTranslation } from "react-i18next";

import classes from "./PageError.module.scss";

export default function PageError() {
  const { t } = useTranslation();

  return (
    <div className={classes.container}>{t("Непередбачувана помилка")}</div>
  );
}
