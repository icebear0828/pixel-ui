import type { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { PixelCheck } from "./icons";
import type { Tone } from "./types";

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "size"> {
  /** 复选框文字 */
  label?: ReactNode;
  /** 选中时的色调，默认 green */
  tone?: Tone;
}

/**
 * 像素复选框。选中时方块填充色调并显示像素对勾。
 */
export function Checkbox({ label, tone = "green", disabled, className, ...rest }: CheckboxProps) {
  return (
    <label className={cn("px-check", `px-tone--${tone}`, disabled && "px-check--disabled", className)}>
      <input type="checkbox" className="px-check__input" disabled={disabled} {...rest} />
      <span className="px-check__box" aria-hidden="true">
        <PixelCheck size={18} className="px-check__mark" />
      </span>
      {label && <span className="px-check__label">{label}</span>}
    </label>
  );
}
