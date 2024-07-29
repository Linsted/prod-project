import { useState } from "react";
import { useTranslation } from "react-i18next";

import LangSwitcher from "widgets/LangSwitcher/LangSwitcher";

import classNames from "shared/lib/classNames/classNames";
import Button from "shared/ui/Button/Button";
import classes from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { t } = useTranslation();

  function toggleCollapse() {
    setIsCollapsed((state) => !state);
  }

  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        classes.sidebar,
        {
          [classes.collapsed]: isCollapsed,
        },
        [className]
      )}
    >
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={toggleCollapse}
      >
        {t("Змінити сайдбар")}
      </Button>
      <div className={classes.switchers}>
        <LangSwitcher />
      </div>
    </aside>
  );
}

export default Sidebar;
