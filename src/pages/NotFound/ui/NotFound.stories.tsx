import { ComponentMeta, ComponentStory } from "@storybook/react";
import NotFoundPage from "./NotFoundPage";

export default {
  title: "pages/NotFoundPage",

  component: NotFoundPage,

  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = () => <NotFoundPage />;

export const Primary = Template.bind({});

Primary.args = {};
