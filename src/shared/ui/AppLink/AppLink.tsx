import React from "react";
import { Link, type LinkProps } from "react-router-dom";

import classNames from "shared/lib/classNames/classNames";
import classes from "./AppLink.module.scss";

export enum APP_LINK_THEME {
  SECONDARY = "secondary",
  PRIMARY = "primary",
}

interface AppLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  theme?: APP_LINK_THEME;
}

const AppLink = ({
  children,
  to,
  className,
  theme = APP_LINK_THEME.PRIMARY,
  ...otherProps
}: AppLinkProps) => (
  <Link
    className={classNames(classes.link, {}, [className, classes[theme]])}
    to={to}
    {...otherProps}
  >
    {children}
  </Link>
);

export default AppLink;
