import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Label from "../components/Label";

export default {
  title: "Example/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const LabelStyles = Template.bind({});
LabelStyles.args = {
  text: "text example",
};
