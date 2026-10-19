import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { Progress } from "../Progress";

const meta = {
  title: "反馈/Progress 进度条",
  component: Progress,
  tags: ["autodocs"],
  args: {
    label: "体力",
    value: 60,
    tone: "green",
    showValue: true,
  },
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100, step: 1 } },
    tone: { control: "inline-radio", options: ["green", "blue", "yellow", "pink", "cream"] },
    showValue: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Progress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Interactive: Story = {
  render: () => {
    const Demo = () => {
      const [value, setValue] = useState(40);
      return (
        <div>
          <Progress label="充能" value={value} tone="yellow" />
          <Button size="sm" tone="blue" variant="soft" onClick={() => setValue((v) => Math.max(0, v - 10))}>
            -10
          </Button>
          <Button size="sm" tone="green" onClick={() => setValue((v) => Math.min(100, v + 10))}>
            +10
          </Button>
        </div>
      );
    };
    return <Demo />;
  },
};
