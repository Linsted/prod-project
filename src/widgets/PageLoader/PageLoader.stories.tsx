import { ComponentMeta, ComponentStory } from "@storybook/react";

import PageLoader from "./PageLoader";

export default {
  title: "widget/PageLoader",

  component: PageLoader,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PageLoader>;

const Template: ComponentStory<typeof PageLoader> = () => <PageLoader />;

export const Primary = Template.bind({});

Primary.args = {};
