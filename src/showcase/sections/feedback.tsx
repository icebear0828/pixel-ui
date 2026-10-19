import { useState } from "react";
import { Alert, Button, Modal, Progress, Tooltip } from "@/ui";
import type { DocEntry } from "../types";

function AlertDemo() {
  return (
    <div className="sc-stack">
      <Alert tone="green" title="保存成功">岛屿数据已同步到云端。</Alert>
      <Alert tone="blue" title="提示">今晚 20:00 将举办烟火大会。</Alert>
      <Alert tone="yellow" title="警告">体力不足，请先休息一下。</Alert>
      <Alert tone="pink" title="错误">网络连接失败，请稍后重试。</Alert>
    </div>
  );
}

function ProgressDemo() {
  const [value, setValue] = useState(40);
  return (
    <div className="sc-stack">
      <Progress label="体力" value={72} tone="green" />
      <Progress label="经验" value={35} tone="blue" />
      <Progress label="心情" value={90} tone="pink" />
      <Progress label="充能" value={value} tone="yellow" />
      <div className="sc-row">
        <Button size="sm" tone="blue" variant="soft" onClick={() => setValue((v) => Math.max(0, v - 10))}>
          -10
        </Button>
        <Button size="sm" tone="green" onClick={() => setValue((v) => Math.min(100, v + 10))}>
          +10
        </Button>
      </div>
    </div>
  );
}

function TooltipDemo() {
  return (
    <div className="sc-row sc-row--spread">
      <Tooltip content="点击可以收获一个椰子">
        <Button tone="green" variant="soft">悬停查看（上方）</Button>
      </Tooltip>
      <Tooltip content="今天的天气很好" placement="bottom">
        <Button tone="blue" variant="soft">悬停查看（下方）</Button>
      </Tooltip>
    </div>
  );
}

function ModalDemo() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <div className="sc-row">
      <Button tone="blue" onClick={() => setOpen(true)}>打开弹窗</Button>
      <Modal
        open={open}
        onClose={close}
        title="确认出发？"
        tone="blue"
        footer={
          <>
            <Button tone="cream" variant="soft" size="sm" onClick={close}>再想想</Button>
            <Button tone="green" size="sm" onClick={close}>出发！</Button>
          </>
        }
      >
        去无人岛探险需要消耗 10 点体力，确定要出发吗？按 Esc 或点击遮罩也可以关闭。
      </Modal>
    </div>
  );
}

export const feedbackEntries: DocEntry[] = [
  {
    id: "alert",
    title: "提示条",
    subtitle: "Alert",
    desc: "用于展示成功、信息、警告和错误等状态消息。每种色调自动搭配对应的像素图标。",
    demo: <AlertDemo />,
    usage: `import { Alert } from "@/ui";

<Alert tone="green" title="保存成功">岛屿数据已同步。</Alert>
<Alert tone="pink" title="错误">网络连接失败。</Alert>`,
    api: [
      { name: "tone", type: "Tone", default: '"blue"', desc: "色调，同时决定默认图标" },
      { name: "title", type: "ReactNode", desc: "标题" },
      { name: "showIcon", type: "boolean", default: "true", desc: "是否显示左侧图标" },
    ],
  },
  {
    id: "progress",
    title: "进度条",
    subtitle: "Progress",
    desc: "填充区域带分段纹理，类似游戏里的血条或经验条。可通过 label 和 showValue 展示说明与百分比。",
    demo: <ProgressDemo />,
    usage: `import { Progress } from "@/ui";

<Progress label="体力" value={72} tone="green" />
<Progress value={3} max={5} tone="yellow" showValue={false} />`,
    api: [
      { name: "value", type: "number", desc: "当前值" },
      { name: "max", type: "number", default: "100", desc: "最大值" },
      { name: "tone", type: "Tone", default: '"green"', desc: "填充色调" },
      { name: "label", type: "ReactNode", desc: "左上角标签" },
      { name: "showValue", type: "boolean", default: "true", desc: "是否显示百分比" },
    ],
  },
  {
    id: "tooltip",
    title: "气泡提示",
    subtitle: "Tooltip",
    desc: "悬停或通过键盘聚焦到内部元素时显示像素气泡，支持上方和下方两种位置。",
    demo: <TooltipDemo />,
    usage: `import { Button, Tooltip } from "@/ui";

<Tooltip content="点击可以收获一个椰子">
  <Button>悬停查看</Button>
</Tooltip>
<Tooltip placement="bottom" content="下方提示">...</Tooltip>`,
    api: [
      { name: "content", type: "ReactNode", desc: "气泡内容" },
      { name: "placement", type: '"top" | "bottom"', default: '"top"', desc: "出现位置" },
      { name: "children", type: "ReactNode", desc: "触发元素" },
    ],
  },
  {
    id: "modal",
    title: "弹窗",
    subtitle: "Modal",
    desc: "通过 Portal 渲染到 body，打开时锁定页面滚动，支持 Esc 键和遮罩点击关闭。",
    demo: <ModalDemo />,
    usage: `import { Modal, Button } from "@/ui";

<Modal
  open={open}
  title="确认出发？"
  onClose={() => setOpen(false)}
  footer={<Button size="sm" onClick={() => setOpen(false)}>出发</Button>}
>
  去无人岛探险需要消耗 10 点体力。
</Modal>`,
    api: [
      { name: "open", type: "boolean", desc: "是否显示" },
      { name: "title", type: "ReactNode", desc: "标题栏文字" },
      { name: "onClose", type: "() => void", desc: "关闭回调" },
      { name: "footer", type: "ReactNode", desc: "底部操作区" },
      { name: "tone", type: "Tone", default: '"blue"', desc: "标题栏色调" },
      { name: "closeOnMask", type: "boolean", default: "true", desc: "点击遮罩是否关闭" },
    ],
  },
];
