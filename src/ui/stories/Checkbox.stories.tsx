import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "../Checkbox";

const meta = {
  title: "表单/Checkbox 复选框",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "钓鱼",
    tone: "green",
    defaultChecked: true,
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["green", "blue", "yellow", "pink", "cream"] },
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Group: Story = {
  render: () => (
    <div>
      <Checkbox label="钓鱼" defaultChecked />
      <Checkbox label="抓虫" tone="blue" />
      <Checkbox label="采果" tone="pink" />
      <Checkbox label="禁用选项" disabled />
    </div>
  ),
};
