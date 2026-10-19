import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tabs } from "../Tabs";

const items = [
  { key: "overview", label: "概览", content: "这里是岛屿的整体概况，包括居民、建筑和资源。" },
  { key: "tasks", label: "任务", content: "今日任务：钓 3 条鱼，采集 5 个椰子。" },
  { key: "bag", label: "背包", content: "背包里有 20 个木材、8 个贝壳和一把鱼竿。" },
  { key: "locked", label: "未解锁", content: "升级后解锁", disabled: true },
];

const meta = {
  title: "布局/Tabs 标签页",
  component: Tabs,
  tags: ["autodocs"],
  args: {
    items,
    tone: "blue",
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["green", "blue", "yellow", "pink", "cream"] },
    defaultValue: { control: "select", options: items.map((i) => i.key) },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Green: Story = {
  args: { tone: "green", defaultValue: "tasks" },
};
