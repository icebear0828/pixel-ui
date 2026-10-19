import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { RadioGroup } from "../Radio";

const options = [
  { value: "morning", label: "清晨" },
  { value: "day", label: "白天" },
  { value: "night", label: "夜晚" },
  { value: "rain", label: "雨天（不可选）", disabled: true },
];

const meta = {
  title: "表单/RadioGroup 单选组",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    options,
    defaultValue: "day",
    tone: "green",
    direction: "row",
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["green", "blue", "yellow", "pink", "cream"] },
    direction: { control: "inline-radio", options: ["row", "column"] },
  },
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Controlled: Story = {
  render: (args) => {
    const Demo = () => {
      const [value, setValue] = useState("morning");
      return (
        <div>
          <RadioGroup {...args} value={value} onChange={setValue} direction="column" />
          <p>当前选择：{value}</p>
        </div>
      );
    };
    return <Demo />;
  },
};
