import { useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";
import type { Tone } from "./types";

export interface TabItem {
  /** 唯一标识 */
  key: string;
  /** 标签文字 */
  label: ReactNode;
  /** 面板内容 */
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  /** 受控选中项 key */
  value?: string;
  /** 非受控默认选中项 key，默认第一项 */
  defaultValue?: string;
  /** 切换回调 */
  onChange?: (key: string) => void;
  /** 选中项色调，默认 blue */
  tone?: Tone;
  className?: string;
}

/**
 * 像素标签页：顶部为凸起的标签按钮，下方为带描边的内容面板。
 */
export function Tabs({ items, value, defaultValue, onChange, tone = "blue", className }: TabsProps) {
  const [inner, setInner] = useState(defaultValue ?? items[0]?.key ?? "");
  const currentKey = value ?? inner;
  const active = items.find((item) => item.key === currentKey) ?? items[0];

  const select = (key: string) => {
    setInner(key);
    onChange?.(key);
  };

  return (
    <div className={cn("px-tabs", `px-tone--${tone}`, className)}>
      <div className="px-tabs__list" role="tablist">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={item.key === active?.key}
            disabled={item.disabled}
            className="px-tab"
            onClick={() => select(item.key)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="px-tabs__panel" role="tabpanel">
        {active?.content}
      </div>
    </div>
  );
}
