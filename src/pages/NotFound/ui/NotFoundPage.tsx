import { useTranslation } from "react-i18next";

import classNames from "shared/lib/classNames/classNames";

import notFoundImage from "shared/assets/images/404.png";

import classes from "./NotFoundPage.module.scss";

interface NotFoundPageProps {
  className?: string;
}

export default function NotFoundPage({ className }: NotFoundPageProps) {
  const { t } = useTranslation();

  return (
    <div className={classNames(classes.container, {}, [className])}>
      <img src={notFoundImage} alt="404" />
      <p className={classNames(classes.text, {})}>
        {t("Сторінка не знайдена")}
      </p>
    </div>
  );
}
