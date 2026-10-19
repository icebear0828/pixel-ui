import type { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";
import type { Tone } from "./types";

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  /** 色调，默认 green */
  tone?: Tone;
  /** 是否可关闭 */
  closable?: boolean;
  /** 点击关闭按钮的回调 */
  onClose?: () => void;
}

/**
 * 像素标签，用于状态、分类或可删除的关键词。
 */
export function Tag({ tone = "green", closable = false, onClose, className, children, ...rest }: TagProps) {
  return (
    <span className={cn("px-tag", `px-tone--${tone}`, className)} {...rest}>
      <span>{children}</span>
      {closable && (
        <button type="button" className="px-tag__close" aria-label="移除" onClick={onClose}>
          ×
        </button>
      )}
    </span>
  );
}
