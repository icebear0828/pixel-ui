import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";
import type { Tone } from "./types";

export interface PanelProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  /** 面板标题 */
  title?: ReactNode;
  /** 标题右侧的附加内容（如标签、按钮） */
  extra?: ReactNode;
  /** 色调，默认 cream */
  tone?: Tone;
}

/**
 * 像素面板：带双层描边的卡片容器，用于承载一组相关内容。
 */
export function Panel({ title, extra, tone = "cream", className, children, ...rest }: PanelProps) {
  return (
    <section className={cn("px-panel", `px-tone--${tone}`, className)} {...rest}>
      {(title || extra) && (
        <header className="px-panel__header">
          {title && <h3 className="px-panel__title">{title}</h3>}
          {extra && <div className="px-panel__extra">{extra}</div>}
        </header>
      )}
      <div className="px-panel__body">{children}</div>
    </section>
  );
}
