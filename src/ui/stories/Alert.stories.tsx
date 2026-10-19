import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "../Alert";

const meta = {
  title: "反馈/Alert 提示条",
  component: Alert,
  tags: ["autodocs"],
  args: {
    tone: "blue",
    title: "小提示",
    children: "记得每天登录领取奖励哦。",
    showIcon: true,
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["green", "blue", "yellow", "pink", "cream"] },
    showIcon: { control: "boolean" },
    title: { control: "text" },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllTones: Story = {
  render: () => (
    <div>
      <Alert tone="green" title="保存成功">岛屿数据已同步到云端。</Alert>
      <Alert tone="blue" title="提示">今晚 20:00 将举办烟火大会。</Alert>
      <Alert tone="yellow" title="警告">体力不足，请先休息一下。</Alert>
      <Alert tone="pink" title="错误">网络连接失败，请稍后重试。</Alert>
    </div>
  ),
};
