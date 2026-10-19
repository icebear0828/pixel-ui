import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { Tooltip } from "../Tooltip";

const meta = {
  title: "反馈/Tooltip 气泡提示",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    content: "点击可以收获一个椰子",
    placement: "top",
    children: <Button tone="green" variant="soft">悬停查看</Button>,
  },
  argTypes: {
    placement: { control: "inline-radio", options: ["top", "bottom"] },
    content: { control: "text" },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Placements: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 48, paddingTop: 60 }}>
      <Tooltip content="上方提示">
        <Button tone="blue" variant="soft">上方</Button>
      </Tooltip>
      <Tooltip content="下方提示" placement="bottom">
        <Button tone="pink" variant="soft">下方</Button>
      </Tooltip>
    </div>
  ),
};
