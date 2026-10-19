import { useState, type ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";
import type { Tone } from "./types";

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "value" | "defaultValue"> {
  /** 受控开关状态 */
  checked?: boolean;
  /** 非受控默认状态 */
  defaultChecked?: boolean;
  /** 状态变化回调 */
  onChange?: (checked: boolean) => void;
  /** 开启时的色调，默认 green */
  tone?: Tone;
}

/**
 * 像素开关。基于 role="switch" 的按钮实现，支持键盘操作。
 */
export function Switch({
  checked,
  defaultChecked = false,
  onChange,
  tone = "green",
  className,
  disabled,
  onClick,
  type = "button",
  ...rest
}: SwitchProps) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked ?? inner;

  return (
    <button
      type={type}
      role="switch"
      aria-checked={on}
      disabled={disabled}
      className={cn("px-switch", `px-tone--${tone}`, className)}
      onClick={(e) => {
        const next = !on;
        setInner(next);
        onChange?.(next);
        onClick?.(e);
      }}
      {...rest}
    >
      <span className="px-switch__knob" />
    </button>
  );
}
