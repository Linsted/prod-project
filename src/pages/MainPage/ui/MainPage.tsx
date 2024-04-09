import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();

  return <div>{t("Сторінка головна")}</div>;
};

export default MainPage;
