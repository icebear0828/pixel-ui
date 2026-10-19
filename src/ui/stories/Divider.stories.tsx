import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "../Divider";

const meta = {
  title: "布局/Divider 分割线",
  component: Divider,
  tags: ["autodocs"],
  args: {
    children: undefined,
  },
  argTypes: {
    children: { control: "text" },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 480 }}>
        <p>上方内容</p>
        <Story />
        <p>下方内容</p>
      </div>
    ),
  ],
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithText: Story = {
  args: { children: "今日任务" },
};
