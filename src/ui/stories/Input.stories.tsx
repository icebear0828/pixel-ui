import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input, Textarea } from "../Input";

const meta = {
  title: "表单/Input 输入框",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "昵称",
    placeholder: "请输入昵称",
    hint: "会显示在你的岛屿上",
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
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const WithError: Story = {
  args: {
    label: "昵称",
    defaultValue: "A",
    error: "昵称至少需要 2 个字符",
  },
};

export const Disabled: Story = {
  args: { label: "岛屿编号", defaultValue: "ISLE-0001", disabled: true },
};

export const Multiline: StoryObj<typeof Textarea> = {
  render: () => {
    const Demo = () => {
      const [value, setValue] = useState("");
      return (
        <Textarea
          label="留言"
          placeholder="写点什么..."
          maxLength={100}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          hint={`${value.length}/100`}
        />
      );
    };
    return <Demo />;
  },
};
