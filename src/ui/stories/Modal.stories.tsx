import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../Button";
import { Modal } from "../Modal";

const meta = {
  title: "反馈/Modal 弹窗",
  component: Modal,
  tags: ["autodocs"],
  args: {
    open: true,
    title: "确认出发？",
    tone: "blue",
    children: "去无人岛探险需要消耗 10 点体力，确定要出发吗？",
    closeOnMask: true,
  },
  argTypes: {
    open: { control: "boolean" },
    tone: { control: "inline-radio", options: ["green", "blue", "yellow", "pink", "cream"] },
    closeOnMask: { control: "boolean" },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    footer: (
      <>
        <Button tone="cream" variant="soft" size="sm">再想想</Button>
        <Button tone="green" size="sm">出发！</Button>
      </>
    ),
  },
};

export const Trigger: Story = {
  args: { open: false },
  render: (args) => {
    const Demo = () => {
      const [open, setOpen] = useState(false);
      return (
        <>
          <Button tone="blue" onClick={() => setOpen(true)}>打开弹窗</Button>
          <Modal
            {...args}
            open={open}
            onClose={() => setOpen(false)}
            footer={
              <>
                <Button tone="cream" variant="soft" size="sm" onClick={() => setOpen(false)}>
                  取消
                </Button>
                <Button tone="green" size="sm" onClick={() => setOpen(false)}>
                  确定
                </Button>
              </>
            }
          />
        </>
      );
    };
    return <Demo />;
  },
};
