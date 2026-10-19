import type { Meta, StoryObj } from "@storybook/react-vite";
import { Panel } from "../Panel";
import { Tag } from "../Tag";

const meta = {
  title: "布局/Panel 面板",
  component: Panel,
  tags: ["autodocs"],
  args: {
    title: "我的岛屿",
    tone: "cream",
    children: "岛上一共有 12 种植物，今天也是元气满满的一天。",
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["green", "blue", "yellow", "pink", "cream"] },
    title: { control: "text" },
  },
} satisfies Meta<typeof Panel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithExtra: Story = {
  args: {
    title: "任务",
    tone: "green",
    extra: <Tag tone="green">Lv.3</Tag>,
    children: "完成今日的捕鱼任务即可获得奖励。",
  },
};

export const AllTones: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
      <Panel title="绿色" tone="green">清新的森林风格。</Panel>
      <Panel title="蓝色" tone="blue">清爽的海边风格。</Panel>
      <Panel title="黄色" tone="yellow">温暖的阳光风格。</Panel>
      <Panel title="粉色" tone="pink">柔和的花朵风格。</Panel>
    </div>
  ),
};
