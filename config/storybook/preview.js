import { addDecorator } from "@storybook/react";
import "../../src/app/styles/index.scss";
import RouterDecorator from "../../src/shared/config/storybook/routerDecorator/RouterDecorator";
import StyleDecorator from "../../src/shared/config/storybook/styleDecorator/styleDecorator";

const element = document.getElementById("theme-shift-ve-sb");

const darkTheme = "dark";
const lightTheme = "light";
let currentTheme = lightTheme;

// function to change theme
function changeTheme() {
  if (currentTheme === lightTheme) {
    document.body.classList.replace(lightTheme, darkTheme);
    currentTheme = darkTheme;
  } else {
    document.body.classList.replace(darkTheme, lightTheme);
    currentTheme = lightTheme;
  }
}

if (element) {
  element.addEventListener("click", changeTheme);
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  controls: {
    matchers: {
      color: /(background|color)$/i,

      date: /Date$/,
    },
  },
};

addDecorator(StyleDecorator);
addDecorator(RouterDecorator);
