import { useState } from "react";

import LangSwitcher from "widgets/LangSwitcher/LangSwitcher";

import classNames from "shared/lib/classNames/classNames";
import classes from "./Sidebar.module.scss";

interface SidebarProps {
  className?: string;
}

function Sidebar({ className }: SidebarProps) {
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
      <button type="button" onClick={toggleCollapse}>
        Toogle
      </button>
      <div className={classes.switchers}>
        <LangSwitcher />
      </div>
    </aside>
  );
}

export default Sidebar;
