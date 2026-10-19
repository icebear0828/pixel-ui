import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "../Tag";

const meta = {
  title: "基础/Tag 标签",
  component: Tag,
  tags: ["autodocs"],
  args: {
    children: "已完成",
    tone: "green",
    closable: false,
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["green", "blue", "yellow", "pink", "cream"] },
    closable: { control: "boolean" },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllTones: Story = {
  render: () => (
    <div>
      <Tag tone="green">已完成</Tag>
      <Tag tone="blue">进行中</Tag>
      <Tag tone="yellow">待处理</Tag>
      <Tag tone="pink">已过期</Tag>
      <Tag tone="cream">草稿</Tag>
    </div>
  ),
};

export const Closable: Story = {
  render: () => {
    const Demo = () => {
      const [items, setItems] = useState(["椰子", "贝壳", "鱼竿", "树叶"]);
      return (
        <div>
          {items.map((item) => (
            <Tag
              key={item}
              tone="cream"
              closable
              onClose={() => setItems((prev) => prev.filter((x) => x !== item))}
            >
              {item}
            </Tag>
          ))}
          {items.length === 0 && <span>已全部移除</span>}
        </div>
      );
    };
    return <Demo />;
  },
};
