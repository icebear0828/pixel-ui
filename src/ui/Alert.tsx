import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { PixelIcon, type PixelIconName } from "./icons";
import type { Tone } from "./types";

export interface AlertProps extends Omit<HTMLAttributes<HTMLDivElement>, "title"> {
  /** 色调：决定配色与默认图标，默认 blue */
  tone?: Tone;
  /** 标题 */
  title?: ReactNode;
  /** 是否显示左侧图标，默认 true */
  showIcon?: boolean;
}

/** 每种色调对应的默认像素图标 */
const TONE_ICON: Record<Tone, PixelIconName> = {
  green: "leaf",
  blue: "drop",
  yellow: "bell",
  pink: "heart",
  cream: "coin",
};

/**
 * 像素提示条：用于展示成功、信息、警告、错误等状态消息。
 */
export function Alert({ tone = "blue", title, showIcon = true, className, children, ...rest }: AlertProps) {
  return (
    <div role="alert" className={cn("px-alert", `px-tone--${tone}`, className)} {...rest}>
      {showIcon && (
        <span className="px-alert__icon">
          <PixelIcon name={TONE_ICON[tone]} size={32} />
        </span>
      )}
      <div className="px-alert__body">
        {title && <p className="px-alert__title">{title}</p>}
        {children && <div className="px-alert__desc">{children}</div>}
      </div>
    </div>
  );
}
