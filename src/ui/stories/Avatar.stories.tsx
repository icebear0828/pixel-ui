import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "../Avatar";

const meta = {
  title: "基础/Avatar 头像",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    name: "小猫",
    tone: "blue",
    size: "md",
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["green", "blue", "yellow", "pink", "cream"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <Avatar {...args} size="sm" />
      <Avatar {...args} size="md" />
      <Avatar {...args} size="lg" />
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Avatar name="Tom" tone="green" />
      <Avatar name="海豚" tone="blue" />
      <Avatar name="兔子" tone="yellow" />
      <Avatar name="小狐" tone="pink" />
      <Avatar name="熊" tone="cream" />
    </div>
  ),
};
