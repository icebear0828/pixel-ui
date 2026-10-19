import { useState } from "react";
import { Avatar, Button, PIXEL_ICON_NAMES, PixelIcon, Tag } from "@/ui";
import type { DocEntry } from "../types";

function ButtonDemo() {
  const [loading, setLoading] = useState(false);

  const submit = () => {
    setLoading(true);
    window.setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="sc-stack">
      <div className="sc-row">
        <Button tone="green">绿色</Button>
        <Button tone="blue">蓝色</Button>
        <Button tone="yellow">黄色</Button>
        <Button tone="pink">粉色</Button>
        <Button tone="cream">奶油</Button>
      </div>
      <div className="sc-row">
        <Button variant="soft" tone="green">柔和绿</Button>
        <Button variant="soft" tone="blue">柔和蓝</Button>
        <Button variant="soft" tone="yellow">柔和黄</Button>
        <Button variant="soft" tone="pink">柔和粉</Button>
      </div>
      <div className="sc-row">
        <Button size="sm">小号</Button>
        <Button size="md">中号</Button>
        <Button size="lg">大号</Button>
      </div>
      <div className="sc-row">
        <Button tone="yellow" icon={<PixelIcon name="star" size={16} />}>带图标</Button>
        <Button tone="blue" loading={loading} onClick={submit}>
          {loading ? "提交中" : "点击加载"}
        </Button>
        <Button disabled>禁用</Button>
      </div>
      <Button block tone="pink" size="lg">通栏按钮</Button>
    </div>
  );
}

function IconDemo() {
  return (
    <div className="sc-stack">
      <div className="sc-row sc-row--end">
        <PixelIcon name="heart" size={16} />
        <PixelIcon name="heart" size={32} />
        <PixelIcon name="heart" size={48} />
        <PixelIcon name="heart" size={64} />
      </div>
      <div className="sc-icon-grid">
        {PIXEL_ICON_NAMES.map((name) => (
          <div key={name} className="sc-icon-cell">
            <PixelIcon name={name} size={48} />
            <code>{name}</code>
          </div>
        ))}
      </div>
    </div>
  );
}

function AvatarDemo() {
  return (
    <div className="sc-row sc-row--end">
      <Avatar name="小猫" size="sm" tone="yellow" />
      <Avatar name="Tom" tone="blue" />
      <Avatar name="海豚" size="lg" tone="pink" />
      <Avatar name="Lu" size="lg" tone="green" />
      <Avatar name="熊" tone="cream" />
    </div>
  );
}

function TagDemo() {
  const initial = ["椰子", "贝壳", "鱼竿", "树叶"];
  const [items, setItems] = useState(initial);

  return (
    <div className="sc-row">
      <Tag tone="green">已完成</Tag>
      <Tag tone="blue">进行中</Tag>
      <Tag tone="yellow">待处理</Tag>
      <Tag tone="pink">已过期</Tag>
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
      {items.length === 0 && (
        <Button size="sm" variant="soft" tone="blue" onClick={() => setItems(initial)}>
          重置标签
        </Button>
      )}
    </div>
  );
}

export const basicEntries: DocEntry[] = [
  {
    id: "button",
    title: "按钮",
    subtitle: "Button",
    desc: "按下时会向下位移并压缩底部阴影，模拟真实的按键反馈。支持 5 种色调、两种变体、三种尺寸，以及加载和禁用状态。",
    demo: <ButtonDemo />,
    usage: `import { Button, PixelIcon } from "@/ui";

<Button tone="green">确认</Button>
<Button tone="blue" variant="soft">查看</Button>
<Button tone="pink" size="lg" block>提交</Button>
<Button tone="yellow" icon={<PixelIcon name="star" size={16} />}>收获</Button>
<Button loading>加载中</Button>`,
    api: [
      { name: "tone", type: '"green" | "blue" | "yellow" | "pink" | "cream"', default: '"green"', desc: "按钮色调" },
      { name: "variant", type: '"solid" | "soft"', default: '"solid"', desc: "实心或柔和浅色" },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', desc: "按钮尺寸" },
      { name: "block", type: "boolean", default: "false", desc: "是否撑满父容器宽度" },
      { name: "loading", type: "boolean", default: "false", desc: "加载中，显示闪烁方块并禁止点击" },
      { name: "icon", type: "ReactNode", desc: "按钮前的图标节点" },
    ],
  },
  {
    id: "icon",
    title: "像素图标",
    subtitle: "PixelIcon",
    desc: "内置 6 个 8×8 像素图标，使用 SVG 矩形拼接，任意缩放都保持像素锐利。也可以用 PixelSprite 传入自定义像素网格。",
    demo: <IconDemo />,
    usage: `import { PixelIcon, PixelSprite } from "@/ui";

<PixelIcon name="heart" size={32} />

// 自定义像素画：字符对应 palette 中的颜色，"." 为透明
<PixelSprite
  rows={["..kk..", ".kyyk.", "kyyyyk", ".kkkk."]}
  size={48}
/>`,
    api: [
      { name: "name", type: '"heart" | "star" | "coin" | "leaf" | "bell" | "drop"', desc: "内置图标名称" },
      { name: "size", type: "number", default: "32", desc: "渲染宽度（px），高度按比例计算" },
      { name: "label", type: "string", desc: "无障碍名称，不传则视为装饰图形" },
    ],
  },
  {
    id: "avatar",
    title: "头像",
    subtitle: "Avatar",
    desc: "方形像素头像框。未传入图片时，取名称前两个字符作为头像文字。",
    demo: <AvatarDemo />,
    usage: `import { Avatar } from "@/ui";

<Avatar name="小猫" tone="yellow" size="sm" />
<Avatar name="Tom" src="/tom.png" alt="Tom" size="lg" />`,
    api: [
      { name: "name", type: "string", default: '""', desc: "名称，用于生成头像文字" },
      { name: "src", type: "string", desc: "图片地址" },
      { name: "alt", type: "string", desc: "图片替代文本" },
      { name: "tone", type: "Tone", default: '"blue"', desc: "背景色调" },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', desc: "头像尺寸" },
    ],
  },
  {
    id: "tag",
    title: "标签",
    subtitle: "Tag",
    desc: "用于展示状态、分类或关键词，可通过 closable 变为可移除的标签。",
    demo: <TagDemo />,
    usage: `import { Tag } from "@/ui";

<Tag tone="green">已完成</Tag>
<Tag tone="cream" closable onClose={() => remove(id)}>椰子</Tag>`,
    api: [
      { name: "tone", type: "Tone", default: '"green"', desc: "标签色调" },
      { name: "closable", type: "boolean", default: "false", desc: "是否显示关闭按钮" },
      { name: "onClose", type: "() => void", desc: "点击关闭按钮的回调" },
    ],
  },
];
