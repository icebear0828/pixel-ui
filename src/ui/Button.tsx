import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";
import type { Tone } from "./types";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 色调，默认 green */
  tone?: Tone;
  /** 视觉变体：solid 实心 / soft 柔和浅色 */
  variant?: "solid" | "soft";
  /** 尺寸 */
  size?: "sm" | "md" | "lg";
  /** 是否撑满父容器宽度 */
  block?: boolean;
  /** 加载中：显示闪烁方块并禁止点击 */
  loading?: boolean;
  /** 按钮前的图标节点，例如 <PixelIcon name="star" size={16} /> */
  icon?: ReactNode;
}

/**
 * 像素风按钮。按下时会向下位移并压缩底部阴影，模拟真实的按键反馈。
 */
export function Button({
  tone = "green",
  variant = "solid",
  size = "md",
  block = false,
  loading = false,
  icon,
  disabled,
  className,
  children,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      className={cn(
        "px-btn",
        `px-tone--${tone}`,
        variant === "soft" && "px-btn--soft",
        size !== "md" && `px-btn--${size}`,
        block && "px-btn--block",
        className,
      )}
      {...rest}
    >
      {loading ? (
        <span className="px-btn__spinner" aria-hidden="true" />
      ) : icon ? (
        <span className="px-btn__icon" aria-hidden="true">
          {icon}
        </span>
      ) : null}
      {children}
    </button>
  );
}
