import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  /** 分割线中间的文字，可选 */
  children?: ReactNode;
}

/**
 * 像素虚线分割线，可在中间插入文字作为章节标题。
 */
export function Divider({ children, className, ...rest }: DividerProps) {
  if (!children) {
    return <div role="separator" className={cn("px-divider", className)} {...rest} />;
  }
  return (
    <div role="separator" className={cn("px-divider px-divider--text", className)} {...rest}>
      <span>{children}</span>
    </div>
  );
}
