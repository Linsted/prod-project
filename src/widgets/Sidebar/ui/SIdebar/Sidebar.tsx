import { useState } from "react";
import { useTranslation } from "react-i18next";

import classes from "./Sidebar.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
import LangSwitcher from "widgets/LangSwitcher/LangSwitcher";

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  function toggleCollapse() {
    setIsCollapsed((state) => !state);
  }

  return (
    <aside
      className={classNames(
        classes.sidebar,
        {
          [classes.collapsed]: isCollapsed,
        },
        [className]
      )}
    >
      <button onClick={toggleCollapse}>Toogle</button>
      <div className={classes.switchers}>
        <LangSwitcher />
      </div>
    </aside>
  );
};

export default Sidebar;
