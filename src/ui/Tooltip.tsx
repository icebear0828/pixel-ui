import { useId, type ReactNode } from "react";
import { cn } from "@/utils/cn";

export interface TooltipProps {
  /** 气泡内容 */
  content: ReactNode;
  /** 出现位置，默认 top */
  placement?: "top" | "bottom";
  /** 触发元素（悬停或聚焦内部元素时显示） */
  children: ReactNode;
  className?: string;
}

/**
 * 像素气泡提示。悬停或键盘聚焦到子元素时显示。
 */
export function Tooltip({ content, placement = "top", children, className }: TooltipProps) {
  const id = useId();
  return (
    <span className={cn("px-tooltip", placement === "bottom" && "px-tooltip--bottom", className)}>
      {children}
      <span role="tooltip" id={id} className="px-tooltip__bubble">
        {content}
      </span>
    </span>
  );
}
