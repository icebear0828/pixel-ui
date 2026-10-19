import { useId, useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";
import type { Tone } from "./types";

export interface RadioOption {
  label: ReactNode;
  value: string;
  disabled?: boolean;
}

export interface RadioGroupProps {
  /** 原生 name，未传入时自动生成 */
  name?: string;
  /** 选项 */
  options: RadioOption[];
  /** 受控值 */
  value?: string;
  /** 非受控默认值 */
  defaultValue?: string;
  /** 值变化回调 */
  onChange?: (value: string) => void;
  /** 色调，默认 green */
  tone?: Tone;
  /** 排列方向，默认 row */
  direction?: "row" | "column";
  className?: string;
}

/**
 * 像素单选组。选中项的方块内会出现对应色调的像素核心。
 */
export function RadioGroup({
  name,
  options,
  value,
  defaultValue,
  onChange,
  tone = "green",
  direction = "row",
  className,
}: RadioGroupProps) {
  const autoName = useId();
  const groupName = name ?? autoName;
  const [inner, setInner] = useState(defaultValue ?? "");
  const current = value ?? inner;

  return (
    <div
      role="radiogroup"
      className={cn("px-radio-group", direction === "column" && "px-radio-group--column", className)}
    >
      {options.map((opt) => (
        <label
          key={opt.value}
          className={cn("px-check px-radio", `px-tone--${tone}`, opt.disabled && "px-check--disabled")}
        >
          <input
            type="radio"
            className="px-check__input"
            name={groupName}
            value={opt.value}
            checked={current === opt.value}
            disabled={opt.disabled}
            onChange={() => {
              setInner(opt.value);
              onChange?.(opt.value);
            }}
          />
          <span className="px-radio__box" aria-hidden="true">
            <span className="px-radio__core" />
          </span>
          <span className="px-check__label">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
