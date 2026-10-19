import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "../Switch";

const meta = {
  title: "表单/Switch 开关",
  component: Switch,
  tags: ["autodocs"],
  args: {
    defaultChecked: true,
    tone: "green",
    "aria-label": "背景音乐",
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["green", "blue", "yellow", "pink", "cream"] },
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Controlled: Story = {
  render: () => {
    const Demo = () => {
      const [on, setOn] = useState(false);
      return (
        <label style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
          <Switch checked={on} onChange={setOn} tone="blue" aria-label="夜间模式" />
          夜间模式：{on ? "开" : "关"}
        </label>
      );
    };
    return <Demo />;
  },
};
