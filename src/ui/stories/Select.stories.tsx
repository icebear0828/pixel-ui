import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "../Select";

const options = [
  { label: "海滩", value: "beach" },
  { label: "森林", value: "forest" },
  { label: "山谷", value: "valley" },
  { label: "火山（暂未开放）", value: "volcano", disabled: true },
];

const meta = {
  title: "表单/Select 下拉选择",
  component: Select,
  tags: ["autodocs"],
  args: {
    label: "选择地形",
    options,
    placeholder: "请选择",
  },
  argTypes: {
    label: { control: "text" },
    hint: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithDefaultValue: Story = {
  args: { defaultValue: "forest", placeholder: undefined },
};

export const WithError: Story = {
  args: { error: "请选择一种地形" },
};
