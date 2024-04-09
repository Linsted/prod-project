import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation("about");

  return <div>{t("Сторінка про нас")}</div>;
};

export default AboutPage;
