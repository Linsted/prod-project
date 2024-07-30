import React, { type ButtonHTMLAttributes } from "react";

import classNames from "shared/lib/classNames/classNames";
import classes from "./Button.module.scss";

export enum BUTTON_THEME {
  CLEAR = "clear",
  OUTLINE = "outline",
  CLEAR_INVERTED = "clearInverted"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  theme?: BUTTON_THEME;
}

const Button = ({
  children,
  className,
  theme,
  ...otherProps
}: ButtonProps) => (
  <button
    type="button"
    className={classNames(classes.button, {}, [className, classes[theme]])}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
