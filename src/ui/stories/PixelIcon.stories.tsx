import type { Meta, StoryObj } from "@storybook/react-vite";
import { PIXEL_ICON_NAMES, PixelIcon } from "../icons";

const meta = {
  title: "基础/PixelIcon 像素图标",
  component: PixelIcon,
  tags: ["autodocs"],
  args: {
    name: "heart",
    size: 64,
  },
  argTypes: {
    name: { control: "select", options: PIXEL_ICON_NAMES },
    size: { control: { type: "range", min: 16, max: 128, step: 8 } },
  },
} satisfies Meta<typeof PixelIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 通过 name 选择内置的 8x8 像素图标 */
export const Playground: Story = {};

export const AllIcons: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 120px)", gap: 24 }}>
      {PIXEL_ICON_NAMES.map((name) => (
        <div key={name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <PixelIcon name={name} size={64} />
          <code>{name}</code>
        </div>
      ))}
    </div>
  ),
};
