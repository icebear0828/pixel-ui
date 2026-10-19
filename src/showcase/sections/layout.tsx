import { Divider, Panel, Tabs, Tag } from "@/ui";
import type { DocEntry } from "../types";

function PanelDemo() {
  return (
    <div className="sc-grid-3">
      <Panel title="我的岛屿" tone="green" extra={<Tag tone="green">Lv.3</Tag>}>
        岛上一共有 12 种植物，今天也是元气满满的一天。
      </Panel>
      <Panel title="公告" tone="blue">
        周末将举办烟火大会，欢迎所有居民参加。
      </Panel>
      <Panel title="背包" tone="yellow">
        木材 20 个，贝壳 8 个，还有一把鱼竿。
      </Panel>
    </div>
  );
}

function DividerDemo() {
  return (
    <div className="sc-stack">
      <p>上方内容</p>
      <Divider />
      <p>下方内容</p>
      <Divider>今日任务</Divider>
      <p>分割线中间可以插入章节标题。</p>
    </div>
  );
}

function TabsDemo() {
  return (
    <Tabs
      tone="green"
      items={[
        {
          key: "overview",
          label: "概览",
          content: "这里是岛屿的整体概况，包括居民、建筑和资源。",
        },
        {
          key: "tasks",
          label: "任务",
          content: "今日任务：钓 3 条鱼，采集 5 个椰子。",
        },
        {
          key: "bag",
          label: "背包",
          content: "背包里有 20 个木材、8 个贝壳和一把鱼竿。",
        },
        {
          key: "locked",
          label: "未解锁",
          content: "升级后解锁",
          disabled: true,
        },
      ]}
    />
  );
}

export const layoutEntries: DocEntry[] = [
  {
    id: "panel",
    title: "面板",
    subtitle: "Panel",
    desc: "带双层描边的卡片容器，用于承载一组相关内容，支持标题、标题栏附加内容和色调。",
    demo: <PanelDemo />,
    usage: `import { Panel, Tag } from "@/ui";

<Panel title="我的岛屿" tone="green" extra={<Tag tone="green">Lv.3</Tag>}>
  岛上一共有 12 种植物。
</Panel>`,
    api: [
      { name: "title", type: "ReactNode", desc: "面板标题" },
      { name: "extra", type: "ReactNode", desc: "标题右侧的附加内容" },
      { name: "tone", type: "Tone", default: '"cream"', desc: "面板色调" },
    ],
  },
  {
    id: "divider",
    title: "分割线",
    subtitle: "Divider",
    desc: "像素虚线分割线，可在中间插入文字作为章节标题。",
    demo: <DividerDemo />,
    usage: `import { Divider } from "@/ui";

<Divider />
<Divider>今日任务</Divider>`,
    api: [
      { name: "children", type: "ReactNode", desc: "分割线中间的文字，可选" },
      { name: "className", type: "string", desc: "额外的类名" },
    ],
  },
  {
    id: "tabs",
    title: "标签页",
    subtitle: "Tabs",
    desc: "顶部为凸起的像素标签按钮，下方为带描边的内容面板。支持受控与非受控两种用法。",
    demo: <TabsDemo />,
    usage: `import { Tabs } from "@/ui";

<Tabs
  tone="green"
  items={[
    { key: "overview", label: "概览", content: "..." },
    { key: "tasks", label: "任务", content: "..." },
  ]}
/>`,
    api: [
      { name: "items", type: "TabItem[]", desc: "标签项：key、label、content、disabled" },
      { name: "value", type: "string", desc: "受控选中项 key" },
      { name: "defaultValue", type: "string", default: "第一项", desc: "非受控默认选中项" },
      { name: "onChange", type: "(key: string) => void", desc: "切换回调" },
      { name: "tone", type: "Tone", default: '"blue"', desc: "选中项色调" },
    ],
  },
];
