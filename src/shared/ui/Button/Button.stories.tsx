import { ComponentMeta, ComponentStory } from "@storybook/react";

import Button, { BUTTON_THEME } from "./Button";

export default {
  title: "shared/Button",

  component: Button,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: "Button",
};

export const Clear = Template.bind({});

Clear.args = {
  children: "Button",
  theme: BUTTON_THEME.CLEAR,
};

export const Outline = Template.bind({});

Outline.args = {
  children: "Button",
  theme: BUTTON_THEME.OUTLINE,
};

export const ClearInverted = Template.bind({});

ClearInverted.args = {
  children: "Button",
  theme: BUTTON_THEME.CLEAR_INVERTED,
};
