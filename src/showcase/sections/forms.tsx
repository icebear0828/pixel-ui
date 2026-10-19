import { useState } from "react";
import { Checkbox, Input, RadioGroup, Select, Switch, Textarea } from "@/ui";
import type { DocEntry } from "../types";

const TERRAIN = [
  { label: "海滩", value: "beach" },
  { label: "森林", value: "forest" },
  { label: "山谷", value: "valley" },
  { label: "火山（暂未开放）", value: "volcano", disabled: true },
];

function InputDemo() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const nameError = name.length > 0 && name.length < 2 ? "昵称至少需要 2 个字符" : undefined;

  return (
    <div className="sc-form">
      <Input
        label="昵称"
        placeholder="请输入昵称"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={nameError}
        hint={nameError ? undefined : "会显示在你的岛屿上"}
      />
      <Input label="岛屿编号（禁用）" defaultValue="ISLE-0001" disabled />
      <Textarea
        label="留言"
        placeholder="写点什么..."
        maxLength={100}
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        hint={`${bio.length} / 100`}
      />
    </div>
  );
}

function SelectDemo() {
  const [terrain, setTerrain] = useState("");
  return (
    <div className="sc-form">
      <Select
        label="选择地形"
        placeholder="请选择"
        options={TERRAIN}
        value={terrain}
        onChange={(e) => setTerrain(e.target.value)}
        hint={terrain ? `已选择：${TERRAIN.find((t) => t.value === terrain)?.label}` : "选择后会生成对应的岛屿"}
      />
    </div>
  );
}

function CheckboxDemo() {
  const options = [
    { value: "fish", label: "钓鱼" },
    { value: "bug", label: "抓虫" },
    { value: "fruit", label: "采果" },
  ];
  const [picked, setPicked] = useState<string[]>(["fish"]);
  const toggle = (value: string) =>
    setPicked((prev) => (prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]));

  return (
    <div className="sc-stack">
      {options.map((opt) => (
        <Checkbox
          key={opt.value}
          label={opt.label}
          checked={picked.includes(opt.value)}
          onChange={() => toggle(opt.value)}
        />
      ))}
      <Checkbox label="粉色主题" tone="pink" defaultChecked />
      <Checkbox label="禁用选项" disabled />
      <p className="sc-muted">已选择：{picked.join("、") || "无"}</p>
    </div>
  );
}

function RadioDemo() {
  const [time, setTime] = useState("day");
  return (
    <div className="sc-stack">
      <RadioGroup
        name="time"
        tone="blue"
        value={time}
        onChange={setTime}
        options={[
          { value: "morning", label: "清晨" },
          { value: "day", label: "白天" },
          { value: "night", label: "夜晚" },
          { value: "rain", label: "雨天（不可选）", disabled: true },
        ]}
      />
      <p className="sc-muted">当前时段：{time}</p>
    </div>
  );
}

function SwitchDemo() {
  const [music, setMusic] = useState(true);
  const [night, setNight] = useState(false);
  return (
    <div className="sc-stack">
      <label className="sc-inline">
        <Switch checked={music} onChange={setMusic} aria-label="背景音乐" />
        背景音乐：{music ? "开启" : "关闭"}
      </label>
      <label className="sc-inline">
        <Switch checked={night} onChange={setNight} tone="blue" aria-label="夜间模式" />
        夜间模式：{night ? "开启" : "关闭"}
      </label>
      <label className="sc-inline">
        <Switch disabled aria-label="禁用开关" />
        禁用状态
      </label>
    </div>
  );
}

export const formEntries: DocEntry[] = [
  {
    id: "input",
    title: "输入框",
    subtitle: "Input / Textarea",
    desc: "像素文本输入框与多行文本框，支持标签、辅助说明和错误态。聚焦时描边变为蓝色，出错时变为红色。",
    demo: <InputDemo />,
    usage: `import { Input, Textarea } from "@/ui";

<Input
  label="昵称"
  value={name}
  onChange={(e) => setName(e.target.value)}
  error={name.length < 2 ? "至少 2 个字符" : undefined}
/>
<Textarea label="留言" maxLength={100} hint="最多 100 字" />`,
    api: [
      { name: "label", type: "ReactNode", desc: "字段标签" },
      { name: "hint", type: "ReactNode", desc: "辅助说明文字" },
      { name: "error", type: "string", desc: "错误信息，传入后进入错误态" },
      { name: "...rest", type: "InputHTMLAttributes", desc: "透传原生 input / textarea 属性" },
    ],
  },
  {
    id: "select",
    title: "下拉选择",
    subtitle: "Select",
    desc: "像素下拉选择框，右侧带像素箭头，支持占位文字、禁用选项和错误提示。",
    demo: <SelectDemo />,
    usage: `import { Select } from "@/ui";

<Select
  label="选择地形"
  placeholder="请选择"
  options={[
    { label: "海滩", value: "beach" },
    { label: "森林", value: "forest", disabled: true },
  ]}
  value={terrain}
  onChange={(e) => setTerrain(e.target.value)}
/>`,
    api: [
      { name: "options", type: "SelectOption[]", desc: "选项列表：label、value、disabled" },
      { name: "placeholder", type: "string", desc: "未选择时显示的占位文字" },
      { name: "label", type: "ReactNode", desc: "字段标签" },
      { name: "error", type: "string", desc: "错误信息" },
    ],
  },
  {
    id: "checkbox",
    title: "复选框",
    subtitle: "Checkbox",
    desc: "选中时方块填充色调并出现像素对勾。可以是受控或非受控。",
    demo: <CheckboxDemo />,
    usage: `import { Checkbox } from "@/ui";

<Checkbox label="钓鱼" checked={picked} onChange={() => toggle()} />
<Checkbox label="粉色主题" tone="pink" defaultChecked />`,
    api: [
      { name: "label", type: "ReactNode", desc: "复选框文字" },
      { name: "tone", type: "Tone", default: '"green"', desc: "选中时的色调" },
      { name: "checked", type: "boolean", desc: "受控选中状态" },
      { name: "onChange", type: "ChangeEventHandler", desc: "状态变化回调" },
    ],
  },
  {
    id: "radio",
    title: "单选组",
    subtitle: "RadioGroup",
    desc: "一组互斥的选项，选中项方块内会出现对应色调的像素核心。",
    demo: <RadioDemo />,
    usage: `import { RadioGroup } from "@/ui";

<RadioGroup
  tone="blue"
  value={time}
  onChange={setTime}
  options={[
    { value: "morning", label: "清晨" },
    { value: "night", label: "夜晚" },
  ]}
/>`,
    api: [
      { name: "options", type: "RadioOption[]", desc: "选项：value、label、disabled" },
      { name: "value", type: "string", desc: "受控选中值" },
      { name: "defaultValue", type: "string", desc: "非受控默认值" },
      { name: "onChange", type: "(value: string) => void", desc: "值变化回调" },
      { name: "direction", type: '"row" | "column"', default: '"row"', desc: "排列方向" },
      { name: "tone", type: "Tone", default: '"green"', desc: "选中色调" },
    ],
  },
  {
    id: "switch",
    title: "开关",
    subtitle: "Switch",
    desc: "基于 role=\"switch\" 的像素开关，按钮位移带有步进动画，支持键盘操作。",
    demo: <SwitchDemo />,
    usage: `import { Switch } from "@/ui";

<Switch checked={on} onChange={setOn} aria-label="背景音乐" />
<Switch defaultChecked tone="blue" />`,
    api: [
      { name: "checked", type: "boolean", desc: "受控开关状态" },
      { name: "defaultChecked", type: "boolean", default: "false", desc: "非受控默认状态" },
      { name: "onChange", type: "(checked: boolean) => void", desc: "状态变化回调" },
      { name: "tone", type: "Tone", default: '"green"', desc: "开启时的色调" },
    ],
  },
];
