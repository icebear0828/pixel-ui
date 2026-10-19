import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { PixelIcon } from "../icons";

const meta = {
  title: "基础/Button 按钮",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "确认出发",
    tone: "green",
    variant: "solid",
    size: "md",
  },
  argTypes: {
    tone: { control: "inline-radio", options: ["green", "blue", "yellow", "pink", "cream"] },
    variant: { control: "inline-radio", options: ["solid", "soft"] },
    size: { control: "inline-radio", options: ["sm", "md", "lg"] },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    block: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 默认实心按钮，可通过 Controls 调整色调、尺寸和状态 */
export const Playground: Story = {};

export const SoftVariant: Story = {
  args: { variant: "soft", tone: "blue", children: "柔和按钮" },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
      <Button {...args} size="sm">小号</Button>
      <Button {...args} size="md">中号</Button>
      <Button {...args} size="lg">大号</Button>
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    tone: "yellow",
    children: "收获椰子",
    icon: <PixelIcon name="coin" size={16} />,
  },
};

export const Loading: Story = {
  args: { loading: true, tone: "pink", children: "提交中" },
};

export const Disabled: Story = {
  args: { disabled: true, children: "暂不可用" },
};

export const Block: Story = {
  args: { block: true, tone: "blue", size: "lg", children: "通栏按钮" },
};
