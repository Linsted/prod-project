import { ComponentMeta, ComponentStory } from "@storybook/react";
import AppLink, { APP_LINK_THEME } from "./AppLink";

export default {
  title: "widget/AppLink",

  component: AppLink,

  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  children: "Main page",
  theme: APP_LINK_THEME.PRIMARY,
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: "Main page",
  theme: APP_LINK_THEME.SECONDARY,
};
